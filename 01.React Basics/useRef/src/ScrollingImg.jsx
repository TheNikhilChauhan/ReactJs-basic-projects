import { useRef } from "react";

const ScrollingImage = () => {
  const ref = useRef(null);

  function scrollIndex(index) {
    const listNode = ref.current;

    const imgNode = listNode.querySelectorAll("li>img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return (
    <>
      <nav>
        <button onClick={() => scrollIndex(0)}>Tom</button>
        <button onClick={() => scrollIndex(1)}>Maru</button>
        <button onClick={() => scrollIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={ref}>
          <li>
            <img
              src="https://images.unsplash.com/photo-1637308112525-652bf73bd874?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1637308108861-452c2d4e99c9?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://plus.unsplash.com/premium_photo-1685036741861-bb3a2ebd4988?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ScrollingImage;
