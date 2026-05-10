# Nexora - College Community Platform

## Project Overview
- **Project Name**: Nexora
- **Type**: Web Application (Next.js 15+)
- **Core Functionality**: A centralized digital platform for college students to view subjects, units, notes, and cheatsheets based on their semester and branch.
- **Target Users**: College students

---

## UI/UX Specification

### Layout Structure

**Page Sections**:
1. **Navbar** - Fixed top navigation with logo, nav links, theme toggle
2. **Hero Section** - Landing page with heading, description, CTA, dashboard preview
3. **Dashboard** - Semester/branch selection, subject list, unit details

**Grid/Flex Layout**:
- Container max-width: 1280px with responsive padding
- Flexbox for navbar and card layouts
- CSS Grid for dashboard subject cards

**Responsive Breakpoints**:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Laptop: 1024px - 1440px
- Ultrawide: > 1440px

### Visual Design

**Color Palette** (Light Mode):
- Background: `#FAFAFA`
- Card Background: `#FFFFFF`
- Border: `#E5E5E5`
- Text Primary: `#171717`
- Text Secondary: `#525252`
- Text Muted: `#A3A3A3`
- Accent Primary: `#0A0A0A`
- Accent Hover: `#262626`
- Success: `#22C55E`
- Warning: `#F59E0B`
- Error: `#EF4444`

**Color Palette** (Dark Mode):
- Background: `#0A0A0A`
- Card Background: `#171717`
- Border: `#262626`
- Text Primary: `#FAFAFA`
- Text Secondary: `#A3A3A3`
- Text Muted: `#525252`
- Accent Primary: `#FFFFFF`
- Accent Hover: `#E5E5E5`

**Typography**:
- Font Family: `Geist`, `Inter`, fallback to sans-serif
- Heading 1: 48px / 56px line-height / 700 weight
- Heading 2: 36px / 44px line-height / 600 weight
- Heading 3: 24px / 32px line-height / 600 weight
- Body: 16px / 24px line-height / 400 weight
- Small: 14px / 20px line-height / 400 weight
- Caption: 12px / 16px line-height / 500 weight

**Spacing System**:
- Base unit: 4px
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

**Visual Effects**:
- Border radius: 8px (cards), 6px (buttons), 4px (inputs)
- Box shadow (light): `0 1px 2px rgba(0,0,0,0.05)`
- Box shadow hover: `0 4px 12px rgba(0,0,0,0.1)`
- Transitions: 200ms ease-out
- Glow effect: subtle radial gradient in hero background

### Components

1. **Navbar**
   - Logo (text-based "Nexora")
   - Nav links: Home, Dashboard
   - Theme toggle (sun/moon icons)
   - Mobile: hamburger menu with slide-out drawer

2. **Hero Section**
   - Large heading with gradient text accent
   - Subtitle paragraph
   - CTA buttons (Get Started, View Demo)
   - Dashboard preview image/mockup
   - Subtle animated background glow

3. **Dashboard Shell**
   - Sidebar with semester/branch selector
   - Main content area with subject cards
   - Breadcrumb navigation
   - Mobile: bottom sheet for selection

4. **Subject Card**
   - Subject name
   - Credits badge
   - Weightage indicator
   - Unit count
   - Hover: slight elevation

5. **Unit List**
   - Unit number and title
   - Notes and Cheatsheet links
   - Expand/collapse animation

6. **Selection Components**
   - Dropdown for semester selection
   - Dropdown for branch selection
   - Animated tab transitions

7. **Loading States**
   - Skeleton loaders for cards
   - Spinner for actions

---

## Functionality Specification

### Core Features

1. **Theme System**
   - Light/Dark mode toggle
   - Persist preference in localStorage
   - Respect system preference on first visit

2. **Semester/Branch Selection**
   - Dropdown for semester (1-8)
   - Dropdown for branch (Computer Science, Electronics, Mechanical, etc.)
   - Selection persists in URL params or localStorage

3. **Subject Display**
   - Show subjects based on semester + branch
   - Display: name, credits, weightage %, total units
   - Click to view units

4. **Unit Details**
   - List all units for a subject
   - Each unit shows: number, title
   - Notes link (placeholder)
   - Cheatsheet link (placeholder)

5. **Dashboard Navigation**
   - Home link returns to landing
   - Back from subject to subjects list
   - Breadcrumb trail

### User Interactions

- Click theme toggle → switch theme with smooth transition
- Select semester/branch → update subject list with fade animation
- Click subject card → expand to show units
- Click unit → show notes/cheatsheet options
- Mobile: tap hamburger → slide drawer
- Hover cards → subtle elevation

### Data Handling

- Static mock data for semesters, branches, subjects, units
- Zustand for global state (theme, selection)
- URL params for shareable state

### Edge Cases

- No subjects for selection → show empty state
- Long subject names → truncate with ellipsis
- Mobile sidebar → overlay with backdrop
- Loading states → show skeletons

---

## Acceptance Criteria

1. **Landing Page**
   - [ ] Navbar displays correctly with logo, links, theme toggle
   - [ ] Hero section shows heading, description, CTA buttons
   - [ ] Dashboard preview mockup visible
   - [ ] Background glow effect present but subtle

2. **Dashboard**
   - [ ] Semester dropdown functional
   - [ ] Branch dropdown functional
   - [ ] Subjects display after selection
   - [ ] Subject cards show name, credits, weightage
   - [ ] Clicking subject shows units
   - [ ] Units show notes/cheatsheet links

3. **Theme**
   - [ ] Toggle switches between light/dark
   - [ ] Preference persists on reload
   - [ ] Smooth transition on toggle

4. **Responsiveness**
   - [ ] Mobile: hamburger menu works
   - [ ] Tablet: proper layout adaptation
   - [ ] Laptop: balanced grid
   - [ ] Ultrawide: max-width container prevents overstretch

5. **Performance**
   - [ ] Page loads without console errors
   - [ ] Animations run at 60fps
   - [ ] No layout shifts on load

6. **Visual Polish**
   - [ ] Consistent spacing throughout
   - [ ] Proper typography scaling
   - [ ] Smooth hover transitions
   - [ ] No visual glitches