import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'UdaciCards:notifications';

const HOUR = 18;
const MINUTE = 0;

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
    return {
        title: 'Use the flashcard app!',
        body: "A deck of flashcards a day keeps ignorance away.",
        ios: {
            sound: true,
        },
    };
}

export async function setLocalNotification() {
    const response = await AsyncStorage.getItem(NOTIFICATION_KEY);
    const notification = await JSON.parse(response);

    if (notification === null) {
        const permissionResponse = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        const { status } = permissionResponse;
        if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();
            const next = new Date();
            next.setDate(next.getDate() + 1);
            next.setHours(HOUR);
            next.setMinutes(MINUTE);
            Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                    time: next,
                    repeat: 'day',
                },
            );
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
        }
    }
}