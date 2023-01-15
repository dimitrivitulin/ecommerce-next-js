import Head from "next/head";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

export default function Product ({product}) {
  return(
    <div>
      <Layout>
        <Head>
          <title> {product.name} </title>
        </Head>
        <Container>
          <div>
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export async function getStaticProps ({params}) {
  const {produits_id} = params;
  const product = products.find(({id}) => id === produits_id);
  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: products.map(({id}) => {
      return {
        params: {
          produits_id : id
        }
      }
  }),
  fallback:false
}
} 