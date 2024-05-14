# Web Sockets

- Full Duplex communication
- Single long lived TCP connection
- continunous bi-directional communication
- wss (web socket secure)
- data framing (large data handing is done by chunk/framing)
- 101 switching protocol

## Use Cases

- Analytics
- Collaboration
- Online Games
- Financial trading 

##  Challenges

- Resources usage
- Connection limits
- Sticky sessions
- Load balancer
- Authentication (as we are switching protocol)
- Firewall / proxy
- Connection drop
- Scaling
- Testing/Debugging
- Backword compatibility
- Resource cleanup
