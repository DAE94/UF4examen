import { Component } from '@angular/core';

@Component({
  selector: 'app-item-david-aclaraz',
  standalone: true,
  imports: [],
  templateUrl: './item-david-aclaraz.component.html',
  styleUrl: './item-david-aclaraz.component.css'
})
export class ItemDavidAclarazComponent {
i_preu:number= 0.0001;

  constructor() { }
  comprar(preu :number){
    // Verificar si Metamask está instalado
    //@ts-ignore
    if (typeof window.ethereum !== 'undefined') {
      //@ts-ignore
      const web3 = new Web3(window.ethereum);

      // Solicitar al usuario que conecte su cuenta de Metamask
      //@ts-ignore
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
          const userAccount = accounts[0];

          // Realizar la transacción a tu cuenta de wallet
          // @ts-ignore
          // @ts-ignore
          web3.eth.sendTransaction({
            from: userAccount,
            to: '0xb9e03762437CC61eAeA7aa7AA46ce5702D7F6861', // Tu dirección de wallet
            value: web3.utils.toWei(preu.toString(), 'ether') // Convertir el precio a wei
        })
        .on('transactionHash', (hash: string) => {
            // La transacción se ha enviado, pero aún no está confirmada
            console.log('Transacción enviada. Hash:', hash);
            // Puedes mostrar un mensaje al usuario indicando que la transacción se ha enviado
          })
            //@ts-ignore
            .on('confirmation', (confirmationNumber: number, receipt: any) => {
              // La transacción ha sido confirmada
              if (confirmationNumber >= 1) {
                // Realizar las acciones adicionales de la función comprar
                // Por ejemplo, agregar la venta a la base de datos y vaciar la cesta
                window.alert("S'ha realitzat la compra");
              }
            })
            .on('error', (error: Error) => {
              // La transacción ha fallado
              console.error('Error al enviar la transacción:', error);
              window.alert("Hi ha hagut un error en la transacció");
            });
        })
        .catch((error: Error) => {
          // El usuario ha rechazado la conexión a Metamask
          console.error('Error al conectar con Metamask:', error);
          window.alert("Cal connectar-se amb Metamask per realitzar la compra");
        });
    } else {
      // Metamask no está instalado
      window.alert("S'ha detectat que Metamask no està instal·lat. Cal instal·lar-lo per continuar.");
    }
  }
}
