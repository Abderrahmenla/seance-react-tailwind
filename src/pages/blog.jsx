import { useEffect, useState } from 'react'
import { popularNews, latestNews } from '../data/blog'
import BlogPostCard from '../components/blog-post-card'
import Footer from '../components/footer'
import Header from '../components/header'
export default function Blog() {
  const [fetchedData, setFetchedData] = useState(null)
  const query = `
  {
    blogPostPageCollection{
      items{
        title
        description{
          json
        }
        category
        author
        creationDate
        blogImage{
          url
        }
        timeToRead
      }
    }
  }
`
  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Authenticate the request
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors)
        }

        setFetchedData(data?.blogPostPageCollection?.items)
      })
  }, [])
  return (
    <>
      <Header />
      <main class="pt-12 px-10 pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div class="flex md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            <div class="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
              <img
                src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="rounded-md object-cover w-full h-64"
              />
              <span class="text-green-700 text-sm hidden md:block mt-4">
                {' '}
                Technology{' '}
              </span>
              <h1 class="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                Ignorant branched humanity led now marianne too.
              </h1>
              <p class="text-gray-600 mb-4">
                Necessary ye contented newspaper zealously breakfast he
                prevailed. Melancholy middletons yet understood decisively boy
                law she. Answer him easily are its barton little. Oh no though
                mother be things simple itself. Oh be me, sure wise sons, no.
                Piqued ye of am spirit regret. Stimulated discretion impossible
                admiration in particular conviction up.
              </p>
              <a
                href="#"
                class="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
              >
                Read more
              </a>
            </div>

            <div class="w-full md:w-4/7">
              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {' '}
                    Gadgets{' '}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    At every tiled on ye defer do. No attention suspected oh
                    difficult.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Wonder matter now can estate esteem assure fat roused. Am
                    performed on existence as discourse is. Pleasure friendly at
                    marriage blessing or
                  </p>
                </div>
              </div>

              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {' '}
                    Bitcoin{' '}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Fond his say old meet cold find come whom. The sir park sake
                    bred.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Integer commodo, sapien ut vulputate viverra, Integer
                    commodo Integer commodo, sapien ut vulputate viverra,
                    Integer commodo
                  </p>
                </div>
              </div>

              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {' '}
                    Insights{' '}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>

              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {' '}
                    Cryptocurrency{' '}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 class="font-bold text-3xl">Latest news</h2>
            <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div class="flex items-center gap-6 flex-col lg:flex-row">
            {latestNews.map((blog, index) => (
              <BlogPostCard
                key={index}
                title={blog.title}
                description={blog.description}
                bgCoverUrl={blog.bgCoverUrl}
                category={blog.category}
                author={blog.author}
                creationDate={blog.creationDate}
                timeToRead={blog.timeToRead}
              />
            ))}
          </div>

          <div class="rounded flex md:shadow mt-12">
            <img
              src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="w-0 md:w-1/4 object-cover rounded-l"
            />
            <div class="px-4 py-2">
              <h3 class="text-3xl text-gray-800 font-bold">
                Subscribe to newsletter
              </h3>
              <p class="text-xl text-gray-700">
                We sent latest news and posts once in every week, fresh from the
                oven
              </p>
              <form class="mt-4 mb-10">
                <input
                  type="email"
                  class="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
                  placeholder="john@tech.com"
                />
                <button class="px-4 py-2 rounded bg-green-800 text-gray-100">
                  Subscribe
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
                <p class="text-green-900 opacity-50 text-sm mt-1">
                  No spam. We promise
                </p>
              </form>
            </div>
          </div>

          <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 class="font-bold text-3xl">Popular news</h2>
            <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div class="flex items-center gap-6 flex-col lg:flex-row">
            {fetchedData &&
              fetchedData?.map((blog, index) => (
                <BlogPostCard
                  key={index}
                  title={blog.title}
                  description={
                    blog.description.json.content[0].content[0].value
                  }
                  bgCoverUrl={blog.blogImage.url}
                  category={blog.category}
                  author={blog.author}
                  creationDate={blog.creationDate}
                  timeToRead={blog.timeToRead}
                />
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
