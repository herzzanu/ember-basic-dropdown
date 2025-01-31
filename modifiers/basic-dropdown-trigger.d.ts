import Modifier, { ArgsFor, PositionalArgs, NamedArgs } from 'ember-modifier';
import { Dropdown } from '../components/basic-dropdown';
import type Owner from '@ember/owner';
interface Signature {
    Element: HTMLElement;
    Args: {
        Named: {
            dropdown: Dropdown;
            eventType?: 'click' | 'mousedown';
            stopPropagation?: boolean;
            [named: string]: unknown;
        };
        Positional: unknown[];
    };
}
export default class DropdownTriggerModifier extends Modifier<Signature> {
    didSetup: boolean;
    triggerElement?: HTMLElement;
    toggleIsBeingHandledByTouchEvents: boolean;
    touchMoveEvent?: TouchEvent;
    dropdown: Dropdown;
    desiredEventType: string;
    stopPropagation?: boolean;
    constructor(owner: Owner, args: ArgsFor<Signature>);
    modify(element: HTMLElement, positional: PositionalArgs<Signature>, named: NamedArgs<Signature>): void;
    setup(element: HTMLElement): void;
    update(element: HTMLElement, _positional: PositionalArgs<Signature>, named: NamedArgs<Signature>): void;
    handleMouseEvent(e: MouseEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    handleTouchStart(): void;
    handleTouchEnd(e: TouchEvent): void;
    _touchMoveHandler(e: TouchEvent): void;
}
export {};
