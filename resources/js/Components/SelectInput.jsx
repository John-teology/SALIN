import { forwardRef, useRef, useImperativeHandle } from 'react';

export default forwardRef(function SelectInput(
    {className = '', ...props },
    ref,
) {
    // const localRef = useRe 
    return (
        <select
            {...props}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 ' +
                className
            }
            // ref={localRef}
        >
            {props.children}
        </select>
    );
});
