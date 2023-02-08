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
        <h1>Welcome to Remix Kawaii</h1>
        <h4>
          Right now there is not much to see here. But don't worry, it has only
          been {((new Date().valueOf() / 1000 - 1675835511) / 3600).toFixed(1)}{' '}
          Hours since last change.
        </h4>
        <ul className={clsx(['flex flex-col justify-between'])}>
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
