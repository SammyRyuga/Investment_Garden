function LessonPop({ visible, lesson }) {
  if (!visible) return null;

  return (
    <div id="lesson-pop" className={visible ? "show" : ""}>
      {lesson}
    </div>
  );
}

export default LessonPop;