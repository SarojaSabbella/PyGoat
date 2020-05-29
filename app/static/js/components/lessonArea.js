// import React from 'react';

const LessonArea = props => {

    const pageNavStyle = {
        display: 'inline-block',
        width: '100%'
    };

    const innerNavStyle = {
        display: 'flex'

        // because I cannot use the ... spread operator in JSX, I need to incorporate the first and 
        // third elements into the array and render that to keep them all in the same line
    };const pageNav = props.children[1].map(x => x);
    pageNav.unshift(props.children[0]);
    pageNav.push(props.children[2]);

    return React.createElement(
        'div',
        { id: 'inner-lesson-area' },
        React.createElement(
            'div',
            { style: pageNavStyle, id: 'page-nav' },
            React.createElement(
                'div',
                { style: innerNavStyle, id: 'inner-page-nav' },
                pageNav
            ),
            React.createElement('hr', null),
            React.createElement('div', { className: 'renderHTML' })
        )
    );
};

export { LessonArea };