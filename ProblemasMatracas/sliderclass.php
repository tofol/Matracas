<?
function hacer_slider()
{
$sliders='<div class="container-slider">
		<div id="content-slider">
    		<div id="slider">
	        	<div id="mask">
	            <ul>
	           	<li id="first" class="firstanimation">
	            <a href="#">
	            <img src="images/tororev.png" alt="Toro De Revolución"/>
	            </a>
	            <div class="tooltip">
	            <h1>Toro De Revolución</h1>
	            </div>
	            </li>

	            <li id="second" class="secondanimation">
	            <a href="#">
	            <img src="images/fractal.png" alt="Fractal De Mandlebrot"/>
	            </a>
	            <div class="tooltip">
	            <h1>Fractal De Mandlebrot</h1>
	            </div>
	            </li>

	            <li id="third" class="thirdanimation">
	            <a href="#">
	            <img src="images/nudo.png" alt="Nudo 3D"  height="320" width="680" />
	            </a>
	            <div class="tooltip">
	            <h1>Nudo 3D</h1>
	            </div>
	            </li>

	            <li id="fourth" class="fourthanimation">
	            <a href="#">
	            <img src="images/El24.png" alt="El 24-24 Octaedros"/>
	            </a>
	            <div class="tooltip">
	            <h1>El 24-24 Octaedros</h1>
	            </div>
	            </li>

	            <li id="fifth" class="fifthanimation">
	            <a href="#">
	            <img src="images/Hipercubo.png" alt="Hipercubo"/>
	            </a>
	            <div class="tooltip">
	            <h1>Hipercubo</h1>
	            </div>
	            </li>
	            </ul>
	            </div>
            <div class="progress-bar"></div>
        </div>
    </div>
</div>';
echo $sliders;
}
?>