import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

export abstract class SzBaseComponent implements OnDestroy {

    public static subscriptionCount = 0;
    private subscriptions = new Map<string, Subscription>();

    public set subscription(subs: Subscription) {
        this.incrementCounter();
        this.subscriptions.set(`${SzBaseComponent.subscriptionCount}`, subs);
    }

    public ngOnDestroy(): void { }

    public unsubscribe(): void {
        // tslint:disable-next-line: variable-name
        this.subscriptions.forEach((subs: Subscription, _key: string) => {
            subs.unsubscribe();
            this.decrementCounter();
        });
        this.subscriptions.clear();
    }

    private incrementCounter(): void {
        SzBaseComponent.subscriptionCount++;
    }

    private decrementCounter(): void {
        SzBaseComponent.subscriptionCount--;
    }
}
