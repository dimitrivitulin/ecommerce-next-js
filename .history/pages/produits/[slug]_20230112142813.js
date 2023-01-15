import Head from "next/head";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import products from "../../data/products.json"

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
  const {slug} = params;
  const product = products.find(({id}) => id === slug);
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
          slug : id
        }
      }
  }),
  fallback:false
}
} 