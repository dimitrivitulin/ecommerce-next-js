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
  const {productId} = params;
  const product = products.find(({id}) => id === productId);
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
          productId : id
        }
      }
  }),
  fallback:false
}
} 