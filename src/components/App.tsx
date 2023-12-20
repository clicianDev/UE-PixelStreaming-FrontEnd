// Copyright Epic Games, Inc. All Rights Reserved.

import React from 'react';
import { PixelStreamingWrapper } from './PixelStreamingWrapper';
import "../index.css";
export const App = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <PixelStreamingWrapper
                initialSettings={{
                    AutoPlayVideo: true,
                    AutoConnect: true,
                    ss: 'ws://192.168.254.103:80',
                    StartVideoMuted: true,
                    HoveringMouse: true
                }}
            />
           
        </div>
        
    );
};
