/*
01speed1 — hoy a las 21:08
¡Perfecto! Aquí tienes el ejercicio actualizado con las nuevas instrucciones:

Ejercicio:
Define una variable para el nombre de un guerrero.

Define una variable para los puntos de vida del guerrero.

Define una variable donde pongas el daño de un mostruo

actualiza la variable de la vida del guerro, quitando el ataque del monstruo a la vida

Crea una variable que tenga una concatenación de texto que diga que al guerrero que lo van a atacar y muestre sus puntos de vida ej "[nombre guerrero] lo atacaron y perdio [tanto punto] y ahora tiene [puntos de vida] puntos".

actuliza la variable que contenga los puntos de vida multiplicados x 14.

actualiza la variable que contenga los puntos de vida después de ser envenenado y perder dos veces la mitad de sus puntos de vida.
*/
/*valores*/
let warName = "cotter"
let liveCotter = 100
let robotDamage = -10
let robotPoison = liveCotter/=2
/*acciones*/
/* robot golpea a cotter */
liveCotter += robotDamage /*90*/
const text =  warName + "fue atacado y perdio" + robotDamage + "ahora tiene" + liveCotter;
liveCotter *=14 /*1260*/
robotPoison += liveCotter
robotPoison += liveCotter










