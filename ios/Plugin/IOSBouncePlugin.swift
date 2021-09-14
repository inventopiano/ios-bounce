import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IOSBouncePlugin)
public class IOSBouncePlugin: CAPPlugin {
    @objc override public func load() {
            // Called when the plugin is first constructed in the bridge
        self.bridge?.getWebView()?.scrollView.bounces = true
        }
}
