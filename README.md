This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```c

uint32_t ulLocalIP = FreeRTOS_hton1 pxTCPPacket->xIPHeader ulDestinationIPAddress ); 
uint16_t xLocalPort = FreeRTOS_htons( pxTCPPacket->xTCPHeader usDestinationPort ); 
uint32_t ulRemote IP = FreeRTOS_hton1 pxTCPPacket->IPHeader ulSourceIPAddress); 
uint16_t xRemotePort = FreeRTOS_htons(pxTCPPacket->xTCPHeader.usSourcePort);
BaseType_t xResult = pdPASS;

/* Find the destination socket, and if not found: return a socket listing to the destination PORT. */

pxSocket = (FreeRTOS_Socket_t) pxTCPSocketLookup(ulLocalIP, xLocalPort, ulRemoteIP, xRemotePort );

if( ( pxSocket == NULL ) || ( prvTCPSocketIsActive ( UBaseType_t) pSocket->u.xTCP.ucTCPState) == pdFALSE ) )
{

/* A TCP messages is received but either there is no socket with the
given port number or the there is a socket, but it is in one of these non-active states: CLOSED, CLOSE_WAIT, FIN_WAIT_2, CLOSING, or eTIME_WAIT. */
FreeRTOS_debug_printf( ( "TCP: No active socket on port %d (%1xip:%d)\n", xLocalPort, ulRemoteIP, xRemotePort ) );

/* Send a RST to all packets that can not be handled. As a result
the other party will get a ECONN error. There are two exceptions:
1) A packet that already has the RST flag set.
2) A packet that only has the ACK flag set.
A packet with only the ACK flag set might be the last ACK in
a three-way hand-shake that closes a connection. */

if( ( ( ucTCPFlags & ipTCP_FLAG_CTRL ) != 1pTCP_FLAG_ACK) 88 (( ucTCPFlags & ipTCP_FLAG_RST ) == eu ) )
{
	prvTCPSendReset( pxNetwork@uffer)
}
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
