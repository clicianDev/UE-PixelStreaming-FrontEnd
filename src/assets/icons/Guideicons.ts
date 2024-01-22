// @ts-ignore
import CharacterEditorIcon from './guide/character-editor.png'
// @ts-ignore
import ChatIcon from './guide/chat.png'
// @ts-ignore
import DownIcon from './guide/down.png'
// @ts-ignore
import ForwardWIcon from './guide/forward-W.png'
// @ts-ignore
import ForwardIcon from './guide/forward.png'
// @ts-ignore
import InteractIcon from './guide/interact.png'
// @ts-ignore
import JumpIcon from './guide/jump.png'
// @ts-ignore
import LeftIcon from './guide/left.png'
// @ts-ignore
import MoreHelpIcon from './guide/more-help.png'
// @ts-ignore
import MoveBackwardIcon from './guide/move-backward.png'
// @ts-ignore
import MoveLeftIcon from './guide/move-left.png'
// @ts-ignore
import MoveRightIcon from './guide/move-right.png'
// @ts-ignore
import ReleaseMouseIcon from './guide/release-mouse.png'
// @ts-ignore
import RightIcon from './guide/right.png'
// @ts-ignore
import RunIcon from './guide/run.png'

export const  GuideIcons = {
    character_editor: CharacterEditorIcon,
    chat: ChatIcon,
    down: DownIcon,
    forward_w: ForwardWIcon,
    forward: ForwardIcon,
    interact: InteractIcon,
    jump: JumpIcon,
    left: LeftIcon,
    more_help: MoreHelpIcon,
    move_backward: MoveBackwardIcon,
    move_left: MoveLeftIcon,
    move_right: MoveRightIcon,
    release_mouse: ReleaseMouseIcon,
    right: RightIcon,
    run: RunIcon,
} as const;

// Type definition for the icons object
export type IconKey = keyof typeof GuideIcons;
export type Icons = Record<IconKey, string>;