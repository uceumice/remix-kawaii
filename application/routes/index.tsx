import clsx from 'clsx'

export default function Index() {
  return (
    <div
      className={clsx([
        'w-full h-full',
        'bg-base w-full h-full',
        'flex justify-center items-center',
      ])}
    >
      <div className={clsx(['bg-fill w-fit h-fit', 'p-5', 'rounded-xl'])}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
