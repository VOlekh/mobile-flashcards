import AsyncStorage from '@react-native-async-storage/async-storage'
import { getDecksInfo, timeToString, getDailyReminderValue, getMetricMetaInfo} from './helpers'

export const CARDS_STORAGE_KEY = 'Cards:decks'

function getRandomNumber (max) {
  return Math.floor(Math.random() * max) + 0
}

function setDefaultObjectShape () {
  let dummyData = getDecksInfo()
  const timestamp = Date.now()
  AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}


export function formatCardsResults (results) {
  return results === null
    ? setDefaultObjectShape()
    : returnNonEmpty(JSON.parse(results))
}