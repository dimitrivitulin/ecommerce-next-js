import Head from 'next/head'
import Layout from './../components/Layout'
import Container from './../components/Container'
import products from './../data/products.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    < Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}  className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image src={product.image} alt={product.name} width={300} height={300} className="h-full w-full object-cover object-center group-hover:opacity-75"/>
              </div>
              <Link href={`/produits/${product.id}`}>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              </Link>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}€</p>
              <br/>
              <button className="snipcart-add-item inline-block rounded-md border border-transparent bg-stone-500 py-3 px-8 text-center font-medium text-white hover:bg-stone-600" 
                data-item-id={product.id}
                data-item-image={product.image}
                data-item-name={product.name}
                data-item-price={product.price}
              >
                Ajouter au panier
              </button>
            </div>
            ))}
          </div>
        </div>
      </Container>
    </ Layout>
  )
}


