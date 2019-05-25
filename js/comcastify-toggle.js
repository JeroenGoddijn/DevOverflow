// Add comcastify toggle switch to api-unit div
$(".api-unit").prepend('<div id="DO-comcastify-toggle"></div>');
document.getElementById("DO-comcastify-toggle").innerHTML = '<span>Images loading too fast?    </span><!-- Rounded switch --><label class="switch"><input id="comcastify-switch" type="checkbox"><span class="slider round"></span></label>';
// Add eventlistener to monitor status change of toggle switch ON/OFF
document.getElementById("DO-comcastify-toggle").addEventListener('change', comcastifyState);

// Set constant to BODY tag of HTML page
const bodyTag = document.querySelector('body');

// Logic that determines state of comcastify toggle switch and (de)activates comcastify
function comcastifyState() {
        if (document.getElementById("comcastify-switch").checked) {
            //if toggle is ON run this function
            document.onload = comcastifyjs.fixMyImagesLoadingSoFast({
                boxColor: 'gray',
                // Define what percentage of images visibly load
                loadMaxPercent: 0.75,
                // Define how fast the images load (higher number is slower)
                loadSpeed: 1000,
                loadIncrement: 5
            });
            // let comcastifyHTML = "window.onload = comcastifyjs.fixMyImagesLoadingSoFast({boxColor: 'gray',loadMaxPercent: 0.75,loadSpeed: 1000,loadIncrement: 5});";
            // // console.log(comcastifyHTML);
            // // inject comcastify code to bottom of BODY tag in index.html
            // var comcastifyScript = document.createElement('script');
            // comcastifyScript.setAttribute('id', 'comcastify-this');
            // comcastifyScript.setAttribute('type', 'text/javascript');
            // bodyTag.append(comcastifyScript);
            // document.getElementById('comcastify-this').innerHTML = comcastifyHTML;

        }
        else {
            let comcastifyTag = document.getElementById('comcastify-this');
            console.log(comcastifyTag);
            // comcastifyTag.remove();
        }
        // console.log(document.getElementById("comcastify-switch").checked);
        // return document.getElementById("comcastify-switch").checked;
        // setTimeout(location.reload.bind(location), 1000);
    };