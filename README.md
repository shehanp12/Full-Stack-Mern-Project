name: flutter_app
description: A new Flutter application.

# The following line prevents the package from being accidentally published to
# pub.dev using `pub publish`. This is preferred for private packages.
publish_to: 'none' # Remove this line if you wish to publish to pub.dev

# The following defines the version and build number for your application.
# A version number is three numbers separated by dots, like 1.2.43
# followed by an optional build number separated by a +.
# Both the version and the builder number may be overridden in flutter
# build by specifying --build-name and --build-number, respectively.
# In Android, build-name is used as versionName while build-number used as versionCode.
# Read more about Android versioning at https://developer.android.com/studio/publish/versioning
# In iOS, build-name is used as CFBundleShortVersionString while build-number used as CFBundleVersion.
# Read more about iOS versioning at
# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html
version: 1.0.0+1

environment:
  sdk: ">=2.7.0 <3.0.0"

dependencies:
  flutter:
    sdk: flutter
  flutter_localizations:
    sdk: flutter



  get: ^3.24.0

  page_transition: '^1.0.9'
  smooth_star_rating: '1.0.2'
  firebase_core: ^0.5.3
  cupertino_icons: ^0.1.2
  dio: ^3.0.10

  json_serializable: ^3.5.1
  json_annotation: ^3.1.1
  http: ^0.12.2
  font_awesome_flutter: ^8.8.1
  image_picker: ^0.6.7+17
  shared_preferences: ^0.5.12+4
  firebase_storage: ^5.2.0
  cached_network_image: ^2.5.0
  line_awesome_flutter: ^1.0.1
  rect_getter: ^0.0.1
  provider: ^3.1.0
  splashscreen:
  animated_text_kit: 
  url_launcher: 
  fluttertoast: ^7.1.6
  tflite: ^1.1.1

  
dev_dependencies:
  flutter_test:
    sdk: flutter


# For information on the generic Dart part of this file, see the
# following page: https://www.dartlang.org/tools/pub/pubspec

# The following section is specific to Flutter.
flutter:



  # The following line ensures that the Material Icons font is
  # included with your application, so that you can use the icons in
  # the material Icons class.
  uses-material-design: true

  # To add assets to your application, add an assets section, like this:
  assets:
    - images/1.png
    - images/2.png
    - images/3.png
    - images/4.png
    - images/5.png
    - images/6.png
    - images/7.png
    - images/8.png
    - images/9.png
    - images/welcomenew.png
    - images/tabicon/tab_1.png
    - images/tabicon/tab_1s.png
    - images/tabicon/tab_2.png
    - images/tabicon/tab_2s.png
    - images/tabicon/tab_3.png
    - images/tabicon/tab_3s.png
    - images/tabicon/tab_4.png
    - images/tabicon/tab_4s.png
    - images/room1.jpeg
    - images/room2.jpeg
    - images/background/dashboardbg.jpg
    - images/background/bg2.jpg
    - lib/lang/en.json
    - lib/lang/si.json
    - images/as.png
    - images/welcomenewicon.png
    - images/ads3.jpg
    - images/ads4.jpg
    - images/ads5.jpg
    - images/ads6.jpg
    - assets/labels.txt
    - assets/a.tflite









  # An image asset can refer to one or more resolution-specific "variants", see
  # https://flutter.io/assets-and-images/#resolution-aware.

  # For details regarding adding assets from package dependencies, see
  # https://flutter.io/assets-and-images/#from-packages

  # To add custom fonts to your application, add a fonts section here,
  # in this "flutter" section. Each entry in this list should have a
  # "family" key with the font family name, and a "fonts" key with a
  # list giving the asset and other descriptors for the font. For
  # example:
  # fonts:
  #   - family: Schyler
  #     fonts:
  #       - asset: fonts/Schyler-Regular.ttf
  #       - asset: fonts/Schyler-Italic.ttf
  #         style: italic
  #   - family: Trajan Pro
  #     fonts:
  #       - asset: fonts/TrajanPro.ttf
  #       - asset: fonts/TrajanPro_Bold.ttf
  #         weight: 700
  #

  fonts:
    - family: Poppins
      fonts:
        - asset: fonts/Poppins-Regular.ttf
        - asset: fonts/Poppins-Medium.ttf
        - asset: fonts/Poppins-Bold.ttf
          weight: 700
    - family: Pacifico
      fonts:
        - asset: fonts/Pacifico.ttf
    - family: Fryo
      fonts:
        - asset: fonts/Fryo.ttf
    - family: DancingScript
      fonts:
        - asset: fonts/DancingScript-Bold.ttf
        - asset: fonts/DancingScript-Medium.ttf
        - asset: fonts/DancingScript-Regular.ttf
        - asset: fonts/DancingScript-SemiBold.ttf
    - family: WorkSans
      fonts:
        - asset: fonts/WorkSans-Regular.ttf
        - asset: fonts/WorkSans-Medium.ttf
          weight: 500
        - asset: fonts/WorkSans-SemiBold.ttf
          weight: 600
        - asset: fonts/WorkSans-Bold.ttf
          weight: 700
    - family: Roboto
      fonts:
        - asset: fonts/Roboto-Bold.ttf
        - asset: fonts/Roboto-Regular.ttf
        - asset: fonts/Roboto-Medium.ttf
          weight: 400    

  # For details regarding fonts from package dependencies,
  # see https://flutter.io/custom-fonts/#from-packages
