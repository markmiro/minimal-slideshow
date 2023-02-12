import { useRef } from "react";
import "./styles.css";

const Slide = ({ children }) => (
  <div
    style={{
      position: "relative",
      flex: "none",
      width: "100%",
      display: "grid",
      placeItems: "center",
      scrollSnapAlign: "start",
      color: "magenta",
      fontWeight: "bold",
      border: "4px solid",
      overflow: "hidden"
    }}
  >
    {children}
  </div>
);

const slides = (
  <>
    <Slide>
      <div
        style={{
          color: "blue",
          border: "4px solid"
        }}
      >
        Lorem ipsum
      </div>
    </Slide>
    <Slide>
      <div
        style={{
          color: "blue",
          border: "4px solid",
          width: "100%",
          maxHeight: "100%",
          overflow: "scroll"
        }}
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </div>
    </Slide>
    {[1, 2, 3].map((n) => (
      <Slide key={n}>
        <img
          srcSet="/Paper.Space.110.png 2x"
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
            /* Ensure that the image doesn't overflow the container */
            overflow: "hidden",
            border: "1px solid blue"
          }}
          alt="random"
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            textAlign: "center",
            width: "100%"
          }}
        >
          {n}
        </div>
      </Slide>
    ))}
  </>
);

export default function App() {
  const scrollContainer = useRef();

  const handlePrev = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
    const w = scrollContainer.current.querySelector("div").clientWidth;
    scrollContainer.current.scrollBy({ left: -w, top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    const w = scrollContainer.current.querySelector("div").clientWidth;
    scrollContainer.current.scrollBy({ left: w, top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "4px solid black",
        display: "grid",
        placeItems: "center"
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          border: "2px solid lime",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        <div
          ref={scrollContainer}
          style={{
            height: "100%",
            overflow: "auto",
            scrollSnapType: "x mandatory",
            display: "flex"
          }}
        >
          {slides}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handlePrev}>←</button>
          <button onClick={handleNext}>→</button>
        </div>
      </div>
    </div>
  );
}
