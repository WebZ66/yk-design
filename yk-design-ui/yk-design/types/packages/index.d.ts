import { YkButton } from '../components/button/src/index';
import { YkIcon } from '../components/icon/src';
import { YkSwitch } from '../components/switch/src';
import { YkRadio } from '../components/radio/src';
import { YkCheckbox } from '../components/checkbox/src';
import { YkInput } from '../components/input/src';
import { YkSelect, YkOption } from '../components/select/src';
import { YkTooltip } from '../components/tooltip/src';
import { YkPopover } from '../components/popover/src';
import { default as Message } from '../components/message/src/methods';
import { default as Notification } from '../components/notification/src/methods';
import { App } from 'vue';

export { YkButton, YkIcon, YkSelect, YkSwitch, YkRadio, YkCheckbox, YkInput, YkOption, YkTooltip, YkPopover, Message, Notification, };
declare const _default: {
    install(app: App): void;
};
export default _default;
