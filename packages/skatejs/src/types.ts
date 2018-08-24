export interface CustomElement extends HTMLElement {
  attributeChangedCallback?(name: string, oldValue: string, newValue: string);
  childrenUpdated?();
  connectedCallback?();
  disconnectedCallback?();
  forceUpdate?();
  props?: Object;
  render?();
  renderer?: (root: Root, func: () => any) => void;
  renderRoot?: Root;
  shouldUpdate?(props: Object, state: Object);
  state?: Object;
  updated?(props: Object, state: Object);
}

export interface CustomElementConstructor {
  new (): CustomElement;
  is?: string;
  observedAttributes?: Array<string>;
  props?: {};
}

export type NormalizedPropType = {
  deserialize: (string) => any;
  serialize: (any) => string | void;
  source: (string) => string | void;
  target: (string) => string | void;
};

export type NormalizedPropTypes = Array<{
  propName: string;
  propType: NormalizedPropType;
}>;

export type ObservedAttributes = Array<string>;

export type PropType =
  | ArrayConstructor
  | BooleanConstructor
  | NumberConstructor
  | ObjectConstructor
  | StringConstructor
  | NormalizedPropType;

export type PropTypes = {
  [s: string]: PropType;
};

export type Root = HTMLElement | ShadowRoot;
