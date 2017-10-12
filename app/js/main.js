// 'use strict';

/* ========================
    GLOBAL SCOPE
======================== */

var vw, vh, landingHeight;
var iniVw, iniVh;

// Array - Brand - Classes
let brandClassName = [
    'brand-thevalk',
    'brand-thevalk',
    'brand-thevalk',
    'brand-gan',
    'brand-gan',
    'brand-weilonggts2',
    'brand-weilonggts2',
    'brand-yuexiaopro',
    'brand-rubik'
];

// Array - Theme - Classes
let themeClassName = [
    // "t-default",
    // "t-fluo-main",
    // "t-fluo-black",
    // "t-fluo-pink",
    't-fluo-black',
    't-fluo-black',
    't-fluo-black',
    't-fluo-pink',
    't-fluo-main',
    't-white'
];

// Array - Color - Classes
let colorClassName = [
        "c-up",
        "c-front",
        "c-right",
        "c-back",
        "c-left",
        "c-bottom",
        "c-front",
        "c-front"
];

// Array - Cube Orientation - Classes
let rotationClassName = [
        "rotate0",
        "rotate90",
        "rotate180",
        "rotate270",
        "rotate90",
        "rotate90",
        "rotate90"
];


/**

<div class="cube s3x"> // <!-- add .brand-xxxx to .s3x // add .t-xxxx to .s3x -->
    <div class="layer up">
        <div class="cubie left pos-corner"></div> // <!-- add .c-xxxx to .cubie -->
        <div class="cubie center pos-edge"></div> // <!-- add .c-xxxx to .cubie -->
        <div class="cubie right pos-corner"></div> // <!-- add .c-xxxx to .cubie -->
    </div>
    <div class="layer middle">
        <div class="cubie left pos-edge"></div> // <!-- add .c-xxxx to .cubie -->
        <div class="cubie center pos-center"></div> // <!-- add .c-xxxx to .cubie // add .rotateXX to .pos-center -->
        <div class="cubie right pos-edge"></div> // <!-- add .c-xxxx to .cubie -->
    </div>
    <div class="layer bottom">
        <div class="cubie left pos-corner"></div> // <!-- add .c-xxxx to .cubie -->
        <div class="cubie center pos-edge"></div> // <!-- add .c-xxxx to .cubie -->
        <div class="cubie right pos-corner"></div> // <!-- add .c-xxxx to .cubie -->
    </div>
</div>

<div class="cube s3x">
    <div class="layer up">
        <div class="cubie left pos-corner"></div>
        <div class="cubie center pos-edge"></div>
        <div class="cubie right pos-corner"></div>
    </div>
    <div class="layer middle">
        <div class="cubie left pos-edge"></div>
        <div class="cubie center pos-center"></div>
        <div class="cubie right pos-edge"></div>
    </div>
    <div class="layer bottom">
        <div class="cubie left pos-corner"></div>
        <div class="cubie center pos-edge"></div>
        <div class="cubie right pos-corner"></div>
    </div>
</div>

**/


/* ========================
    HELPER FUNCTIONS
======================== */

// Detect Mobile Device Function ... maybe
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// check if number is even
function isEven(n) {
  return n % 2 == 0;
}

// check and set minimum landing section height
function setLandingHeight(viewportHeight) {
  var minHeight = 560;
  landingHeight = viewportHeight < minHeight ? minHeight - 25 : viewportHeight - 25;
  document.getElementById("js-landing").style.height = landingHeight + 'px';

  // DEBUG @TODO Remove in production
  document.getElementById("next-section").style.height = (viewportHeight + 100) + 'px';
}

// toggle css class on element
function toggleClass(targetNode, class1, class2) {
  if (targetNode.classList.contains(class1)) {
    targetNode.classList.remove(class1);
    targetNode.classList.add(class2);
  } else if (targetNode.classList.contains(class2)) {
    targetNode.classList.remove(class2);
    targetNode.classList.add(class1);
  }
}

// force toggle css class on element
function forceToggleClass(targetNode, targetClass, class2) {
  if (targetNode.classList.contains(class2)) {
    targetNode.classList.remove(class2);
    targetNode.classList.add(targetClass);
  }
}

// initialize theme color object
function iniThemeColors() {
  let body = document.getElementsByTagName('body')[0];

  // DEFAULT THEME
  // initial color values
  let tDefault = {
    gradientColor: {
      top: "#202020",
      bottom: "#202020"
    },
    gradientGlowColor: {
      top: "#202020",
      bottom: "#202020"
    },
    subTxtGlowColor: {
      attr1: "#ffcc66",
      attr2: "#6699cc",
      attr3: "#f2777a"
    },
    foregroundColor: "#cccccc"
  };

  // VIBRANT THEME
  // initial color values
  let tVibrant = {
    gradientColor: {
      top: "#070e29",
      bottom: "#230023"
    },
    gradientGlowColor: {
      top: "#070e29",
      bottom: "#891989"
    },
    subTxtGlowColor: {
      attr1: "#fcec01",
      attr2: "#22AAFF",
      attr3: "#ff11cc"
    },
    foregroundColor: "#ffffff"
  };

  // BMO THEME
  // initial color values
  let tBmo = {
    gradientColor: {
      top: "#004a7c",
      bottom: "#0079c1"
    },
    gradientGlowColor: {
      top: "#004a7c",
      bottom: "#66afda"
    },
    subTxtGlowColor: {
      attr1: "#ffffff",
      attr2: "#ffffff",
      attr3: "#ffffff"
    },
    foregroundColor: "#ffffff"
  };

  // LIGHT THEME
  // initial color values
  let tLight = {
    gradientColor: {
      top: "#ffffff",
      bottom: "#ffffff"
    },
    gradientGlowColor: {
      top: "#ffffff",
      bottom: "#ffffff"
    },
    subTxtGlowColor: {
      attr1: "#ffffff",
      attr2: "#ffffff",
      attr3: "#ffffff"
    },
    foregroundColor: "#2d2d2d"
  };


  if (body.classList.contains('theme-default')) {
    return tDefault;
  }
  else if (body.classList.contains('theme-vibrant')) {
    return tVibrant;
  }
  else if (body.classList.contains('theme-light')) {
    return tLight;
  }
  else if (body.classList.contains('theme-bmo')) {
    return tBmo;
  }

} // END iniThemeColors()





// Set multiple attributes
function setAttributes(el, attrs) {
    for (var i = 0; i < attrs.length; i++) {
        el.classList.add(attrs[i]);
    }
}

function getRandomIndex(array) {
    return array[Math.floor(Math.random()*array.length)]
}

function appendNewCube(elementId, brandArray, themeArray, colorArray, rotationArray) {
    var container = document.getElementById(elementId);
    var brand = getRandomIndex(brandArray);
    var theme = getRandomIndex(themeArray);

    var cube = document.createElement('div');
    setAttributes(cube,['cube', 's3x', brand, theme]);
    container.appendChild(cube);

    var layerClassName = ['up','middle','bottom'];
    var cubieClassName = ['left','center','right'];
    var posEdgeClassName = ['pos-corner','pos-edge','pos-corner'];
    var posMiddleClassName = ['pos-edge','pos-center','pos-edge'];

    // set layers el and classes
    var layer, cubie;
    for (var i = 0; i < layerClassName.length; i++) {
        layer = document.createElement('div');
        setAttributes(layer,['layer', layerClassName[i]]);
        cube.appendChild(layer);

        // set cubies el and classes
        for (var j = 0; j < cubieClassName.length; j++) {

            // if theme is t-white, set c-up as color to all cubies
            var color = theme == 't-white' ? 'c-up' : getRandomIndex(colorArray);

            cubie = document.createElement('div');
            setAttributes(cubie,['cubie', cubieClassName[j], color]);

            // set position classes
            if (layerClassName[i] != 'middle') {
                cubie.classList.add(posEdgeClassName[j]);
            } else {
                cubie.classList.add(posMiddleClassName[j]);

                // set cube rotation
                if (cubieClassName[j] == 'center') {
                    cubie.classList.add(getRandomIndex(rotationArray));
                }
            }
            layer.appendChild(cubie);
        }
    }
}





/* ========================
    WINDOW ONLOAD
======================== */

window.onload = function() {

  vw = window.innerWidth;
  vh = window.innerHeight;
  iniVw = vw;
  iniVh = vh;
  var cubeCount = 1152;

  // for (var j = 0; j < cubeCount; j++) {
  //   appendNewCube("container", brandClassName, themeClassName, colorClassName, rotationClassName);
  // }

  for (var j = 0; j < cubeCount; j++) {
    appendNewCube("container",
        ['brand-thevalk','brand-thevalk','brand-thevalk','brand-gan','brand-gan','brand-weilonggts2','brand-weilonggts2','brand-yuexiaopro','brand-rubik'],
        ['t-fluo-black','t-fluo-black','t-fluo-black','t-fluo-pink','t-fluo-main','t-white'],
        colorClassName, rotationClassName
    );
  }

}; // window.onload END
