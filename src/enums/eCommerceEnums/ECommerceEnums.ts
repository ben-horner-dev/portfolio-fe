function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const ECommerceAndSocialData = [
  {
    name: "profile_1",
    posts: [
      {
        src: "product_1",
        liked: false,
      },
    ],
    followed: true,
    messages: [
      { sender: "profile_1", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_1", msg: "Yea, I will call you later" },
    ],
    active: getRandomInt(0, 24),
  },
  {
    name: "profile_2",
    posts: [
      {
        src: "product_2",
        liked: false,
      },
    ],
    followed: true,
    messages: [{ sender: "profile_2", msg: "Hey, u up?" }],
    active: getRandomInt(0, 24),
  },
  {
    name: "profile_3",
    posts: [
      {
        src: "product_3",
        liked: false,
      },
    ],
    followed: true,
    messages: [
      { sender: "profile_3", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_3", msg: "Yea, I will call you later" },
      { sender: "profile_3", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_3", msg: "Yea, I will call you later" },
      { sender: "profile_3", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_3", msg: "Yea, I will call you later" },
      { sender: "profile_3", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_3", msg: "Yea, I will call you later" },
    ],
    active: getRandomInt(0, 24),
  },
  {
    name: "profile_4",
    posts: [
      {
        src: "product_4",
        liked: false,
      },
    ],
    followed: true,
    messages: [
      { sender: "profile_4", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_4", msg: "Yea, I will call you later" },
    ],
    active: getRandomInt(0, 24),
  },
  {
    name: "profile_5",
    posts: [
      {
        src: "product_5",
        liked: false,
      },
    ],
    followed: true,
    messages: [
      { sender: "profile_5", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_5", msg: "Yea, I will call you later" },
    ],
    active: getRandomInt(0, 24),
  },
  {
    name: "profile_6",
    posts: [
      {
        src: "product_6",
        liked: false,
      },
    ],
    followed: true,
    messages: [
      { sender: "profile_6", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_6", msg: "Yea, I will call you later" },
    ],
    active: getRandomInt(0, 24),
  },
  {
    name: "profile_7",
    posts: [
      {
        src: "product_7",
        liked: false,
      },
    ],
    followed: true,
    messages: [
      { sender: "profile_7", msg: "Hi hows it goin?" },
      { sender: "me", msg: "good, how are you" },
      { sender: "me", msg: "Did you want to meet later?" },
      { sender: "profile_7", msg: "Yea, I will call you later" },
    ],
    active: getRandomInt(0, 24),
  },
];

export enum Visibility {
  VISIBLE = "visible",
  INVISIBLE = "hidden",
  HIDDEN = "hidden",
}

export const DEFAULT_DIMENSION = 1000;

export enum CheckoutColumns {
  PRICE = "Price",
  ADD = "Add",
  REMOVE = "Remove",
  QUANTITY = "Quantity",
  SUBTOTAL = "Subtotal",
}

export const DEFAULT_MAX_QTY = 9;

export enum ImageTrackDirection {
  LEFT,
  RIGHT,
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
}

export enum HoverClass {
  HOVER = "hover",
  NO_HOVER = "no-hover",
}

export enum Prefix {
  SOCIALS = "socials",
  PRODUCT = "product",
}
