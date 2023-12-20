import * as React from 'react';
import {MenuIcons} from '../assets/icons/MenuIcons'

interface MenuItem {
  name: string;
  // @ts-ignore
  path: IconKey; // Use IconKey type for the path property
}
const menu: MenuItem[] = [
    { name: 'spaces', path: 'spaces' },
    { name: 'emote', path : 'emoji' },
    { name: 'chat', path : 'chat' },
    { name: 'mic', path : 'mic' },
    { name: 'map', path : 'map' },
    { name: 'shop', path : 'bag' },
    { name: 'profile', path : 'profile' }
];
const MenuLayout: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                paddingLeft: '15px',
                paddingRight: '15px',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                gap: '10px'
            }}
        >
             {menu.map((item, index) => (
        <div style={{ color: 'white', margin: 'auto' }} key={index}>
          <a
            style={{
              borderRadius: '100%',
              border: '1px',
              borderStyle: `${index == 6 ? 'none' :'groove'}`,
              borderColor: 'white',
              backgroundColor: `${index == 6 ? '' : 'rgba(0, 0, 0, 0.5)'}`,
              padding: `${index == 0 ? '10px' :'8px'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto'
            }}
          >
            {/* @ts-ignore */}
            <img src={MenuIcons[item.path]} alt={item.name} style={{margin: 'auto'}} />
          </a>
        </div>
      ))}
        </div>
    );
}

export default MenuLayout;
