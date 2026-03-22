<style>
.markdown-section h1, .markdown-section h2, .markdown-section h3 { color: #ffffff !important; }
.markdown-section p, .markdown-section li { color: #eeeeee !important; }
.fb-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; margin: 40px 0; }
.fb-card { background: #1a1a1a; border: 1px solid #333333; border-radius: 12px; padding: 30px 10px; transition: all 0.2s ease-in-out; text-align: center; text-decoration: none !important; display: flex; flex-direction: column; align-items: center; }
.fb-card:hover { background: #222222; border-color: #f3ad38; box-shadow: 0 8px 20px rgba(0,0,0,0.6); }
.fb-card img { border: none !important; border-radius: 0 !important; box-shadow: none !important; }
.fb-name { margin-top: 16px; font-weight: 700; color: #ffffff; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px; }
.v-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin: 40px 0; }
.v-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; background: #000; border: 2px solid #333; }
.v-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
.pro-footer { margin-top: 100px; padding: 80px 0; background: #0d0d0d; border-radius: 12px; }
.faq-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 50px; max-width: 1100px; margin: 40px auto 0; padding: 0 20px; }
.faq-box h4 { color: #f3ad38; margin-bottom: 15px; font-size: 1.15em; font-weight: 800; }
.faq-box p { line-height: 1.8; color: #cccccc; font-size: 1em; margin: 0; }

/* Primary Button */
.hero-btn { background: #f3ad38 !important; color: #000000 !important; font-weight: 800; padding: 18px 35px; border-radius: 4px; text-decoration: none !important; display: inline-flex; align-items: center; gap: 12px; font-size: 1.1em; border: none !important; transition: background 0.2s; }
.hero-btn:hover { background: #ffc107 !important; }

/* Secondary Button (Outline) */
.hero-btn-secondary { background: transparent !important; color: #ffffff !important; font-weight: 700; padding: 18px 35px; border-radius: 4px; text-decoration: none !important; display: inline-flex; align-items: center; gap: 12px; font-size: 1.1em; border: 2px solid #333333 !important; transition: all 0.2s; }
.hero-btn-secondary:hover { border-color: #ffffff !important; background: rgba(255,255,255,0.05) !important; }

.hero-btn img, .hero-btn-secondary img { border: none !important; border-radius: 0 !important; box-shadow: none !important; vertical-align: middle; }

.lang-selector { display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; align-items: center; color: #888; font-size: 0.95em; }
.lang-link { color: #ffffff; text-decoration: none; padding: 8px 16px; border: 1px solid #333; border-radius: 20px; font-size: 0.9em; transition: all 0.2s; background: rgba(255,255,255,0.05); }
.lang-link:hover { border-color: #f3ad38; color: #f3ad38; background: rgba(243, 173, 56, 0.1); }
</style>

<div style="text-align: center; padding: 80px 20px; background: #0a0a0a; border-radius: 12px; margin-bottom: 60px;">
<h1 style="font-size: 3.5em; margin-bottom: 10px; letter-spacing: -1px;">Firebase Features</h1>
<p style="font-size: 1.4em; color: #f3ad38; font-weight: 600; margin-bottom: 15px;">C++ SDK Integration for Unreal Engine</p>
<p style="font-size: 1.1em; opacity: 0.8; max-width: 800px; margin: 0 auto 30px; line-height: 1.6;">A high-performance, production-ready framework designed for professional game developers. Unlike REST-based wrappers, this plugin leverages the native Firebase C++ SDK to provide low-latency backend services with 100% Blueprint and C++ parity.</p>

<div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 40px; font-size: 0.9em; font-weight: 700; text-transform: uppercase; opacity: 0.6;">
<span>⚡ Native C++ Performance</span>
<span>🌐 Cross-Platform</span>
<span>🛠️ Full Blueprint Parity</span>
</div>

<div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
<a class="hero-btn" href="https://www.fab.com/listings/feaef5b9-d11d-4609-84de-f4551203682d">
Download on Fab Marketplace <img width="24" height="24" src="_images/buyueicon.png" alt="Icon"/>
</a>
<a class="hero-btn-secondary" href="#/installation">
Go to installation doc
</a>
</div>
</div>

<div class="lang-selector">
Documentation also available in
<a href="/index.html" class="lang-link">English</a>
<a href="/es/index.html" class="lang-link">Español</a>
<a href="/fr/index.html" class="lang-link">Français</a>
</div>

<h2 style="text-align: center;">Explore Components</h2>
<div class="fb-grid">
<a class="fb-card" href="#/firestore"><img src="_images/firebase/Firestore.png" width="64" height="64"/><div class="fb-name">Firestore</div></a>
<a class="fb-card" href="#/functions"><img src="_images/firebase/CloudFunctions.png" width="64" height="64"/><div class="fb-name">Functions</div></a>
<a class="fb-card" href="#/auth"><img src="_images/firebase/Auth.png" width="64" height="64"/><div class="fb-name">Authentication</div></a>
<a class="fb-card" href="#/database"><img src="_images/firebase/Database.png" width="64" height="64"/><div class="fb-name">Realtime DB</div></a>
<a class="fb-card" href="#/storage"><img src="_images/firebase/Storage.png" width="64" height="64"/><div class="fb-name">Storage</div></a>
<a class="fb-card" href="#/appcheck"><img src="_images/firebase/AppCheck.png" width="64" height="64"/><div class="fb-name">App Check</div></a>
<a class="fb-card" href="#/crashlytics"><img src="_images/firebase/Crashlytics.png" width="64" height="64"/><div class="fb-name">Crashlytics</div></a>
<a class="fb-card" href="#/admob"><img src="_images/firebase/AdMob.png" width="64" height="64"/><div class="fb-name">AdMob</div></a>
<a class="fb-card" href="#/analytics"><img src="_images/firebase/Analytics.png" width="64" height="64"/><div class="fb-name">Analytics</div></a>
<a class="fb-card" href="#/messaging"><img src="_images/firebase/Messaging.png" width="64" height="64"/><div class="fb-name">Messaging</div></a>
<a class="fb-card" href="#/remoteconfig"><img src="_images/firebase/RemoteConfig.png" width="64" height="64"/><div class="fb-name">Remote Config</div></a>
<a class="fb-card" href="#/performance"><img src="_images/firebase/Performance.png" width="64" height="64"/><div class="fb-name">Performance</div></a>
</div>

<h2 style="text-align: center; margin-top: 80px;">Video Guides</h2>
<div class="v-grid">
<div class="v-wrapper"><iframe src="https://www.youtube.com/embed/SbVVrKnS78Y?rel=0" allowfullscreen></iframe></div>
<div class="v-wrapper"><iframe src="https://www.youtube.com/embed/rVBxrr6i76Q?rel=0" allowfullscreen></iframe></div>
<div class="v-wrapper"><iframe src="https://www.youtube.com/embed/TyGt6ZA816E?rel=0" allowfullscreen></iframe></div>
</div>

<footer class="pro-footer">
<h2 style="text-align: center; font-size: 2em;">Frequently Asked Questions</h2>
<div class="faq-container">
<div class="faq-box"><h4>How do I integrate Firebase with Unreal Engine 5?</h4><p>Integration is seamless. Download the plugin from Fab, add your <code>google-services.json</code> to the Services folder, and call the Initialize function. Our native C++ wrapper handles the complex configuration for you.</p></div>
<div class="faq-box"><h4>Is there a performance difference vs REST wrappers?</h4><p>Yes. By leveraging the <strong>Native Firebase C++ SDK</strong>, this plugin offers lower latency, less overhead, and background processing capabilities that REST APIs cannot match, ensuring your game maintains a high frame rate.</p></div>
<div class="faq-box"><h4>Which platforms are supported for Firebase in Unreal?</h4><p>We provide unified support for <strong>Windows, macOS, Linux, iOS, and Android</strong>. Write your logic once in Blueprints or C++ and deploy across all supported game platforms without changing your backend code.</p></div>
<div class="faq-box"><h4>How does the plugin handle User Data Privacy (GDPR/UMP)?</h4><p>The plugin includes built-in modules for the <strong>Google User Messaging Platform (UMP)</strong>. This allows you to easily display legal consent forms and manage data privacy preferences required for AdMob and Analytics globally.</p></div>
<div class="faq-box"><h4>Can I use Firebase for Real-time multiplayer data?</h4><p>Absolutely. Using the <strong>Realtime Database</strong> or <strong>Cloud Firestore</strong> listeners, you can sync scores, player locations, or inventory state across clients in milliseconds with built-in offline persistence.</p></div>
<div class="faq-box"><h4>Is this plugin production-ready for large-scale games?</h4><p>Yes. Firebase Features is trusted by thousands of studios. It is designed with robust error handling, best-effort synchronization, and has been battle-tested in games with millions of active users.</p></div>
</div>
<div style="text-align: center; margin-top: 100px; opacity: 0.3; font-size: 0.85em;">
<p>© 2026 Pandores Marketplace. Powering professional Unreal Engine games globally.</p>
</div>
</footer>