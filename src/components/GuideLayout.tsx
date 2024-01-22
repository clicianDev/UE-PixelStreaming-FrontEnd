import * as React from 'react';
import { GuideIcons } from '../assets/icons/GuideIcons';

const GuideItem = [
    { key: 'forward', primary: 'forward', secondary: 'forward_w' },
    { key: 'left', primary: 'left', secondary: 'move_left' },
    { key: 'backward', primary: 'down', secondary: 'move_backward' },
    { key: 'right', primary: 'right', secondary: 'move_right' },
    { key: 'run', primary: 'run' },
    { key: 'release-mouse', primary: 'release_mouse' },
    { key: 'jump', primary: 'jump' },
    { key: 'more-help', primary: 'more_help' },
    { key: 'chat', primary: 'chat' },
    { key: 'character-editor', primary: 'character_editor' },
    { key: 'interact', primary: 'interact' }
];

function GuideLayout() {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                color: 'white',
                border: '1px',
                borderRadius: '5px'
            }}
        >
            <div
                style={{
                    display: 'flex'
                }}
            >
                <div
                    style={{
                        padding: '5px'
                    }}
                >
                    Quick Start Guide
                </div>
            </div>
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    padding: '20px',
                    border: '1px',
                    borderRadius: '5px'
                }}
            >
                {GuideItem.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center',
                            marginBottom: 5,
                            
                        }}
                    >
                        <div style={{
                            padding: 5,
                        }}>{item.key}</div>
                        <div style={{
                            justifyContent: 'center',
                            display: 'flex',
                            maxWidth: 100
                        }}>
                               {/* @ts-ignore */}
                        <img src={GuideIcons[item.primary]} style={{margin: 'auto'}}/>
                         {/* @ts-ignore */}
                        <img src={GuideIcons[item.secondary]} style={{margin: 'auto'}} />
                        </div>
                      

                    </div>
                ))}
            </div>
        </div>
    );
}

export default GuideLayout;
