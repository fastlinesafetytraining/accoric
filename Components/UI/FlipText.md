# FlipText Component

A React component that creates an animated text carousel with vertical scrolling transitions. Each text item fades in/out while moving vertically, creating a smooth cycling effect.

## Features

- ✅ **Vertical scrolling animations** - Smooth transitions between text items
- ✅ **Independent height calculation** - Each component instance calculates its own height
- ✅ **Multiple instances support** - Can be used multiple times on the same page
- ✅ **Customizable timing** - Adjustable delay and duration
- ✅ **GSAP-powered** - Smooth, performant animations
- ✅ **TypeScript support** - Fully typed with TypeScript
- ✅ **Responsive** - Adapts to different text sizes and content

## Installation

The component requires the following dependencies:

```bash
npm install gsap @gsap/react
```

## Basic Usage

```tsx
import FlipText from '@/Components/UI/FlipText';

function MyComponent() {
  return (
    <FlipText 
      texts={["Hello", "World", "Animation"]} 
      className="text-2xl font-bold"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `texts` | `string[]` | **Required** | Array of text strings to cycle through |
| `className` | `string` | `undefined` | Optional CSS class name for styling the container |
| `delay` | `number` | `1.5` | Delay in seconds before transitioning to next text |
| `duration` | `number` | `0.8` | Duration in seconds for the transition animation |

## Examples

### Basic Usage
```tsx
<FlipText 
  texts={["Hello", "World", "Animation"]} 
  className="text-2xl font-bold"
/>
```

### Custom Timing
```tsx
<FlipText 
  texts={["Feature 1", "Feature 2", "Feature 3"]}
  delay={2}
  duration={1}
  className="text-xl text-blue-600"
/>
```

### Multiple Instances
```tsx
<div>
  <FlipText texts={["First", "Second"]} className="text-lg" />
  <FlipText texts={["Alpha", "Beta", "Gamma"]} className="text-xl" />
</div>
```

### With Tailwind CSS
```tsx
<FlipText 
  texts={["Innovative", "Reliable", "Fast"]}
  className="text-3xl font-bold text-blue-600 bg-gray-100 p-4 rounded-lg"
  delay={2}
  duration={1.2}
/>
```

## How It Works

### Animation Flow
1. **Initial State**: First text is visible, others are hidden
2. **Transition**: Current text moves up and fades out while next text moves to center and fades in
3. **Timing**: Each text shows for the specified `delay` duration, then transitions over the `duration` time
4. **Loop**: After the last text, it cycles back to the first text seamlessly

### Height Calculation
- Each component instance calculates its own height independently
- Uses a temporary span element to measure the actual rendered height
- Height is based on the first text item's font size and styling
- Multiple instances on the same page won't interfere with each other

### GSAP Timeline
- Creates an infinite repeating timeline
- Uses `power2.inOut` easing for smooth transitions
- Animations are scoped to the component instance
- Supports `repeatRefresh: true` for dynamic content updates

## Styling

### Container Styles
The component uses flexbox layout with:
- `display: flex`
- `flexDirection: column`
- `position: relative`
- Dynamic height based on text content

### Text Item Styles
Each text item is positioned absolutely:
- `position: absolute`
- `top: 0, left: 0`
- All items overlap in the same position

### Custom Styling
You can apply custom styles through the `className` prop:

```tsx
<FlipText 
  texts={["Custom", "Styled", "Text"]}
  className="text-2xl font-bold text-blue-600 bg-gray-100 p-4 rounded-lg shadow-lg"
/>
```

## Performance Considerations

- **GSAP Optimization**: Uses GSAP's optimized animation engine
- **Scoped Animations**: Each component instance has its own animation scope
- **Efficient Height Calculation**: Temporary DOM elements are created and removed immediately
- **Memory Management**: Proper cleanup of GSAP timelines

## Browser Support

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Troubleshooting

### Animation Not Working
- Ensure GSAP is properly installed: `npm install gsap @gsap/react`
- Check that the component is wrapped in a GSAP context provider
- Verify that `texts` array is not empty

### Height Issues
- Make sure the component has proper CSS styling applied
- Check that the first text item has the desired font size
- Ensure the container has enough space for the calculated height

### Multiple Instances Conflicts
- Each instance should have unique styling if needed
- The component automatically isolates height calculations per instance
- Use different `className` props for distinct styling

## API Reference

### FlipText(props: FlipTextProps)

#### FlipTextProps
```typescript
interface FlipTextProps {
  texts: string[];
  className?: string;
  delay?: number;
  duration?: number;
}
```

## Contributing

When contributing to this component:

1. Maintain the existing animation behavior
2. Add proper TypeScript types for new props
3. Update documentation for any new features
4. Test with multiple instances on the same page
5. Ensure height calculation remains independent per instance

## License

This component is part of the Accoric project and follows the same licensing terms. 