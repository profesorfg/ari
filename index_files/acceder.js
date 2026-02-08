function acceso(){
window.parent.location = "../soluciones/" + document.formclave1.clave1.value + ".html"
}
document.write('<form name="formclave1"><input name="clave1" type="password"><input value="Acceder" onclick="acceso()" type="button"></form>');