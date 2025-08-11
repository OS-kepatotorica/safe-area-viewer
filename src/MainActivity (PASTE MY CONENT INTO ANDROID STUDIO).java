package com.example.safeareaviewer;

import android.graphics.Rect;
import android.os.Build;
import android.os.Bundle;
import android.view.DisplayCutout;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowManager;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setupSafeAreaInsets();
    }

    private void setupSafeAreaInsets() {
        View decorView = getWindow().getDecorView();

        decorView.setOnApplyWindowInsetsListener((v, insets) -> {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.VANILLA_ICE_CREAM) {
                // Android 15+ supports edge to edge
                android.graphics.Insets systemBars = insets.getInsets(WindowInsets.Type.systemBars());
                android.graphics.Insets displayCutout = insets.getInsets(WindowInsets.Type.displayCutout());

                int top = Math.max(systemBars.top, displayCutout.top);
                int bottom = Math.max(systemBars.bottom, displayCutout.bottom);
                int left = Math.max(systemBars.left, displayCutout.left);
                int right = Math.max(systemBars.right, displayCutout.right);

                injectSafeAreaCSS(top, right, bottom, left);

            } else {
                injectSafeAreaCSS(0, 0, 0, 0);
            }

            return insets;
        });
    }

    private void injectSafeAreaCSS(int top, int right, int bottom, int left) {
        // Convert pixels to density-independent pixels
        float density = getResources().getDisplayMetrics().density;
        float topPx = top / density;
        float rightPx = right / density;
        float bottomPx = bottom / density;
        float leftPx = left / density;

        // Inject CSS with the safe area values - fixed CSS custom property syntax
        String css = String.format(
                ":root { " +
                        "--safe-area-inset-top: %dpx; " +
                        "--safe-area-inset-right: %dpx; " +
                        "--safe-area-inset-bottom: %dpx; " +
                        "--safe-area-inset-left: %dpx; " +
                        "}",
                (int) topPx, (int) rightPx, (int) bottomPx, (int) leftPx);

        // Execute JavaScript to inject the CSS
        runOnUiThread(() -> {
            if (bridge != null && bridge.getWebView() != null) {
                String script = String.format(
                        "try { " +
                                "  var style = document.getElementById('safe-area-style'); " +
                                "  if (!style) { " +
                                "    style = document.createElement('style'); " +
                                "    style.id = 'safe-area-style'; " +
                                "    document.head.appendChild(style); " +
                                "  } " +
                                "  style.textContent = '%s'; " +
                                "} catch(e) { console.error('Error injecting safe area CSS:', e); }",
                        css.replace("'", "\\'"));

                bridge.getWebView().evaluateJavascript(script, null);
            }
        });
    }
}
