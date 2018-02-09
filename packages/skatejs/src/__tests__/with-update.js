/* @flow */
/* @jsx h */

import { mount } from '@skatejs/bore';
import { h } from '@skatejs/val';
import { props, withUpdate } from '..';

const { expect, test } = global;

class Elem extends withUpdate(HTMLElement) {
  static props = {
    testProp: String,
    testPropDoNotSet: null
  };
  updating() {}
}

async function createElemAwaitTrigger() {
  const elem = new Elem();
  // $FlowFixMe - jest is not defined.
  elem.triggerUpdate = jest.fn();
  return mount(elem).waitFor(w => elem.triggerUpdate.mock.calls.length === 1);
}

test('attr should be the prop.toLowerCase()', () => {
  expect(Elem.observedAttributes).toEqual(['testprop']);
});

test('defined attrs call triggerUpdate()', async () => {
  const elem = await createElemAwaitTrigger();
  elem.node.setAttribute('testprop', '');
  expect(elem.node.triggerUpdate.mock.calls).toHaveLength(2);
});

test('defined props call triggerUpdate()', async () => {
  const elem = await createElemAwaitTrigger();
  elem.node.testProp = '';
  expect(elem.node.triggerUpdate.mock.calls).toHaveLength(2);
});

test('undefined attrs do not call triggerUpdate()', async () => {
  const elem = await createElemAwaitTrigger();
  elem.node.setAttribute('undefinedtest', '');
  expect(elem.node.triggerUpdate.mock.calls).toHaveLength(1);
});

test('undefined props do not call triggerUpdate()', async () => {
  const elem = await createElemAwaitTrigger();
  elem.node.undefinedTest = '';
  expect(elem.node.triggerUpdate.mock.calls).toHaveLength(1);
});

test('props that do not have an attribute handler are not set from attributes', async () => {
  const elem = await createElemAwaitTrigger();
  elem.node.setAttribute('testpropdonotset', '');
  expect(elem.node.triggerUpdate.mock.calls).toHaveLength(1);
});

test('attr should set prop', () => {
  const { node } = mount(<Elem />);
  node.setAttribute('testprop', 'test');
  expect(node.testProp).toBe('test');
});

test('triggerUpdate() should be batched', done => {
  const { node } = mount(<Elem />);
  // $FlowFixMe - jest is not defined.
  node.updating = jest.fn();
  node.triggerUpdate();
  node.triggerUpdate();
  setTimeout(() => {
    expect(node.updating.mock.calls).toHaveLength(1);
    done();
  });
});
