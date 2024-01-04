import * as React from 'react';


const GuideItem = [
    {key: 'forward'},
    {key: 'left'},
    {key: 'backward'},
    {key: 'right'},
    {key: 'run'},
    {key: 'release-mouse'},
    {key: 'jump'},
    {key: 'more-help'},
    {key: 'chat'},
    {key: 'charactyer-editor'},
    {key: 'interact'}
    ]

function GuideLayout() {

 return(
    <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}>
       {GuideItem.map((item, index) => (
        <div key={index}>{item.key}</div>
       ))}
    </div>
 );
}

export default GuideLayout;