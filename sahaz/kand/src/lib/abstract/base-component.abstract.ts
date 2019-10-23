import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

export abstract class SzBaseComponent implements OnDestroy {

    public static subscriptionCount = 0;
    private subscriptions = new Map<string, Subscription>();

    public set subscription(subs: Subscription) {
        this.incrementCounter();
        this.subscriptions.set(`${SzBaseComponent.subscriptionCount}`, subs);
    }

    public setSubscriptionWithKey(key: string, subs: Subscription): void {
        this.subscriptions.set(key, subs);
        this.incrementCounter();
    }

    public ngOnDestroy(): void { this.unsubscribe(); }

    public unsubscribe(...keys: string[]): void {
        if (keys) {
            keys.forEach((item: string) => {
                const subs = this.subscriptions.get(item);
                subs && subs.unsubscribe();
                this.subscriptions.delete(item);
                this.decrementCounter();
            });
        } else {
            // tslint:disable-next-line: variable-name
            this.subscriptions.forEach((subs: Subscription, _key: string) => {
                subs.unsubscribe();
                this.decrementCounter();
            });
            this.subscriptions.clear();
        }
    }

    private incrementCounter(): void {
        SzBaseComponent.subscriptionCount++;
    }

    private decrementCounter(): void {
        SzBaseComponent.subscriptionCount--;
    }
}
