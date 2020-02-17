L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: 'Прекратить рисование', //'Cancel drawing',
                text: 'Отмена' //'Cancel'
            },
            finish: {
                title: 'Закончить рисование', //'Finish drawing',
                text: 'Закончить' //'Finish
            },
            undo: {
                title: '', //'Delete last point drawn',
                text: 'Удалить последнюю точку' //'Delete last point'
            },
            buttons: {
                polyline: 'Нарисовать линию', //'Draw a polyline',
                polygon: 'Нарисовать полигон', //'Draw a polygon',
                rectangle: 'Нарисовать прямоугольник', //'Draw a rectangle',
                circle: 'Нарисовать окружность', //'Draw a circle',
                marker: 'Нарисовать маркер', //'Draw a marker'
                circlemarker: 'Нарисовать круглый маркер' //'Draw a circle marker'
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: 'Нажмите и потяните для рисования окружности' //'Click and drag to draw circle.'
                },
                radius: 'Радиус' //'Radius'
            },
            marker: {
                tooltip: {
                    start: 'Кликните на карту для расположения маркера' //'Click map to place marker.'
                }
            },
            polygon: {
                tooltip: {
                    start: 'Кликните на карту для начала рисования', //'Click to start drawing shape.',
                    cont: 'Кликните для продолжения рисования', //'Click to continue drawing shape.',
                    end: 'Кликните на первую вершину для окочания' //'Click first point to close this shape.'
                }
            },
            polyline: {
                error: '<strong>Ошибка:</strong> части линии не должны пересекаться!',
                tooltip: {
                    start: 'Кликните на карту для начала рисования', //'Click to start drawing line.',
                    cont: 'Кликните для продолжения рисования', //'Click to continue drawing line.',
                    end: 'Кликните на последнюю вершину для завершения линии' //'Click last point to finish line.'
                }
            },
            rectangle: {
                tooltip: {
                    start: 'Кликните и потяните для создания прямоугольника' //'Click and drag to draw rectangle.'
                }
            },
            simpleshape: {
                tooltip: {
                    end: 'Отпустите кнопку мыши для окончания рисования' //'Release mouse to finish drawing.'
                }
            },
            circlemarker: {
                tooltip: {
                    end: 'Кликните, чтобы нарисовать круглый маркер' //'Click map to place circle marker.'
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: 'Сохранить изменения', //'Save changes.',
                    text: 'Сохранить' //'Save'
                },
                cancel: {
                    title: 'Прекратить редактирование, отмена всех изменений', //'Cancel editing, discards all changes.',
                    text: 'Отмена' //'Cancel'
                },
                clearAll: {
                    title: 'Очистить все слои', //'Clear all layers'
                    text: 'Очистить всё' //'Clear All'
                }
            },
            buttons: {
                edit: 'Редактировать слои', //'Edit layers.',
                editDisabled: 'Отсутствуют слои для редактирования', //'No layers to edit.',
                remove: 'Удалить слои', //'Delete layers.',
                removeDisabled: 'Отсутствуют слои для удаления' //'No layers to delete.'
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: 'Потяните вершину или маркер для изменения объекта', //'Drag handles, or marker to edit feature.',
                    subtext: 'Нажмите отмена для возвращения в исходное состояние' //'Click cancel to undo changes.'
                }
            },
            remove: {
                tooltip: {
                    text: 'Кликните на объект для его удаления' //'Click on a feature to remove'
                }
            }
        }
    }
};