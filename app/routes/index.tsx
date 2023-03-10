import { typedjson, useTypedLoaderData } from "remix-typedjson";

export function loader() {
  return typedjson({
    firstObject: {
      someProperty: "",
    },
    "firstObject.deeper": {
      // If this is anything that needs special serialization, then it will break
      anotherProperty: new Date(),
    },
  });
}

export default function Index() {
  const data = useTypedLoaderData<typeof loader>();

  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
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
  );
}
