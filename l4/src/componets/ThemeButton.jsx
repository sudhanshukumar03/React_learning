import useTheme from "../context/Theme";

export default function ThemeBtn() {
  const { themeMode, brightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    if (e.target.checked) {
      darkTheme();
    } else {
      brightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === "dark"}
        onChange={onChangeBtn}
      />

      <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>

      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        Toggle Theme
      </span>
    </label>
  );
}