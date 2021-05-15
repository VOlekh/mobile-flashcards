import { StyleSheet } from 'react-native'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_KEY = 'notifications';

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  }
})

// export function timeToString(time = Date.now()) {
//   const date = new Date(time);
//   const todayUTC = new Date(
//     Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
//   );
//   return todayUTC.toISOString().split("T")[0];
// }

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }

export function createNotification() {
  return {
    title: 'Stady your quiz!',
    body: '👋 don\'t forget to tady your quiz today!',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          Notifications.getPermissionsAsync()
          .then(({ status }) => {
            if(status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tommorow = new Date();
              tommorow.setDate(tommorow.getDate() + 1);
              tommorow.setHours(20);
              tommorow.setMinutes(0);

              Notifications.scheduleNotificationAsync(
                createNotification(),
                {
                  time: tommorow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}