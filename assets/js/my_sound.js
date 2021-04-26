<script> 
	const mySound = document.getElementById("sound"); 
	const startStopButton = document.getElementById("startStopSound"); 
	var toggleSound = 0;

	startStopButton.addEventListener("click", function(){
        if( toggleSound == 0 )
        {
                mySound.play();
                toggleSound = 1;
        }
        else
        {
                mySound.pause();
                toggleSound = 0;
        } })


</script> 

