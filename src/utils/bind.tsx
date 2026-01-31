'use client';

import React from 'react';

export function bind<P extends Record<string, unknown>>(
    ViewController: React.ComponentType<P>,
    useViewModel: () => P
) {
    function BoundComponent() {
        const props = useViewModel();
        return <ViewController {...props} />;
    }

    BoundComponent.displayName = `Bound(${ViewController.displayName || ViewController.name || 'Component'})`;

    return BoundComponent;
}
