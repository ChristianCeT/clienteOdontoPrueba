import PresupuestoState from '../context/presupuesto/PresupuestoState'
import client from '../graphql/ApolloClient';
import { ApolloProvider  } from '@apollo/client';
import '../styles/globals.css'
import "../components/prespuesto/Presupuesto.css";


function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>  
        <PresupuestoState>
          <Component {...pageProps} />
        </PresupuestoState>
      </ApolloProvider> 
    )
}

export default MyApp
