#pragma strict

function Start () {

}

function Update () {
transform.position.x += 
Input.GetAxis("Horizontal") * (50.0*Time.deltaTime);
transform.position.y +=
Input.GetAxis("Vertical") * (50.0*Time.deltaTime);
}