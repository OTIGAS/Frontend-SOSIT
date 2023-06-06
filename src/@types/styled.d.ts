/* eslint-disable @typescript-eslint/no-empty-interface */

import "styled-components"
import { defaultThemeLight, defaultThemeDark } from "../styles/themes/default"

type ThemeType = typeof defaultThemeLight & typeof defaultThemeDark;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {
        'neutral': string;
        'primary-neutral': string;
        'color-1': string;
        'color-2': string;
        'color-3': string;
        'color-4': string;
        'color-5': string;
        'color-6': string;
        'color-7': string;
        'color-8': string;
        'color-9': string;
        'primary-neutral': string;
        'primary-light': string;
        'primary-dark': string;
        'red-300': string;
        'red-500': string;
        'red-700': string;
    }
}