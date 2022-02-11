## Настройки виджета

```ts
/**
 * HTML атрибут data-{attribute}
 * @default 'photomechanics'
 */
attribute: string

/**
 * Имя CSS класса виджета
 * @default 'photomechanics'
 */
className: string

/**
 * Отладка событий в консоль
 * @default false
 */
debug: boolean

/**
 * Цвет фона виджета
 * @default '#fff'
 */
color: string

/**
 * Время в секундах оборота оси X
 * @default 5
 */
speed: number

/**
 * Время в секундах оборота оси Y
 * @default 5
 */
yspeed: number

/**
 * Уровни зума
 * @default [100]
 */
zoomLevels: number[]

/**
 * Шаг логического зума, от 0 до 1. Реальный шаг может быть больше, в зависимости от minZoomStepBaseRelative.
 * @default 0.1
 */
defaultLogicalZoomStep: number

/**
 * Минимальное изменение масштаба относительно базового (обычно 1). Помогает избежать слишком маленького шага зума.
 * @default 0.1
 */
minZoomStepBaseRelative: number

/**
 * Кол-во кадров по оси Х
 * @default 60
 */
frames: number

/**
 * Кол-во кадров по оси Y
 * @default 1
 */
yframes: number

/**
 * Начинать загрузку кадров при загрузке страницы
 * @default true
 */
startImmediately: boolean

/**
 * Запускать автопрокрутку виджета
 * @default false
 */
autoPlay: boolean

/**
 * Показывать подсказку секунд,
 * если прелоадер завершился ранее
 * @default 5
 */
helperTimeout: number

/**
 * Цвет фона подсказки
 * @default 'rgba(255,255,255,0.9)'
 */
helperBgColor: string

/**
 * Текст подсказки, может иметь HTML тэги
 * @default 'Просто крутите<br/> в разные стороны'
 */
helperText: string

/**
 * Цвет текста подсказки
 * @default '#7b7b7b'
 */
helperTextColor: string

/**
 * Цвет значка подсказки
 * @default '#000'
 */
helperIconColor: string

/**
 * Цвет фона кнопки "Закрыть" подсказки
 * @default '#fff'
 */
helperCloseIconBgColor: string

/**
 * Цвет значка кнопки "Закрыть" подсказки
 * @default '#000'
 */
helperCloseIconColor: string

/**
 * Проигрывать виджет в обратном порядке по оси X
 */
reverse: boolean

/**
 * Проигрывать виджет в обратном порядке по оси Y
 */
yreverse: boolean

/**
 * Всегда показывать панель кнопок
 * @default false
 */
menuBar: boolean

/**
 * Позиция панели кнопок, когда показана всегда
 * @default 'left'
 */
menuPosition: 'left' | 'center' | 'right'

/**
 * Цвет фона меню / кнопки меню
 * @default '#fff'
 */
menuBgColor: string

/**
 * Звет значка кнопки меню
 * @default '#000'
 */
menuIconColor: string

/**
 * Тип кнопки меню
 * @default 'shadow'
 */
menuBorderType: 'shadow' | 'border'

/**
 * Цвет обводки меню для типа border
 * @default '#ddd'
 */
menuBorderColor: string

/**
 * Ширина обводки меню в пикселях для типа border
 * @default 3
 */
menuBorderWidth: number

/**
 * Подписаться на события действий (кнопок)
 * @member beforeAction - перед действием, параметр cancel отменяет следующие действия
 * @member action - само действие, параметр cancel отменяет следующие действия
 * @member afterAction - после дейтсвия, параметр cancel игнорируется
 * @example actions: {
 *              play: {
 *                  beforeAction: function(event) {
 *                      // случайно отменит действие кнопки Play
 *                      if (Math.random() > 0.5) {
 *                          event.cancel = true;
 *                      }
 *                  },
 *                  action: function(event) {
 *                      console.log('play', event)
 *                      this.action() // выполнит текущее действие по умолчанию
 *                  },
 *                  afterAction: function (event) {
 *                      console.log('после выполнения play', event)
 *                  }
 *              }
 *          }
 */
actions?: { [key: string]: WidgetActionOptions | Function }

/**
 * Выполнить действие после инициализации виджета
 */
onInit?: Function

/**
 * Начальный кадр по осе X
 * @default 1
 */
firstFrameX: number

/**
 * Начальный кадр по осе Y
 * @default 1
 */
firstFrameY: number

/**
 * Высота кнопок с отступами, для вычилсения скрытия
 * изменить в случае изменения размера кнопок (высота + отступы сверху/снизу)
 * @default 53
 */
inControlHeight: number

/**
 * Высота кнопки меню с отступами, для вычилсения скрытия
 * изменить в случае изменения размера кнопки "Меню" (высота + отступы сверху/снизу)
 * @default 85
 */
inMenuHeight: number

/**
 * Отключить скрол браузера для тачскрин
 * при нахождении над виджетом
 * @default true
 */
disableScrollOnTouch: boolean

/**
 * Задержка кадров для оси X в ms
 * @default 0
 */
delayXMouseRotate: number

/**
 * Задержка кадров для оси Y в ms
 * @default 60
 */
delayYMouseRotate: number

/**
 * Изменить режим полноэкранного режима
 * при двойном клике
 * @default true
 */
fullscreenOnDblClick: boolean

/**
 * Запускать прокрутку по клику на область плеера.
 * */
playOnClick: boolean

/**
 * Любые дополнительные параметры
 * например для использования в "действиях"
 */
[propName: string]: any
```
