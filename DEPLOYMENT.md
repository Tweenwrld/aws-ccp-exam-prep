# AWS CCP Exam Prep - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
cd /home/cliente/Desktop/Amazon/aws-ccp-exam-prep
vercel
```

4. **Follow prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `aws-ccp-exam-prep` (or your choice)
   - Directory? `./` (press Enter)
   - Override settings? **N**

5. **Production deployment**:
```bash
vercel --prod
```

### Option 2: Vercel Dashboard

1. **Go to**: https://vercel.com/new
2. **Import Git Repository**:
   - Connect your GitHub/GitLab/Bitbucket
   - Select the repository
3. **Configure Project**:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
4. **Click Deploy**

### Option 3: GitHub Integration (Automatic)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Deploy automatically on every push

---

## ✅ Pre-Deployment Checklist

All items below are **already configured** ✓

- [x] `vercel.json` - Vercel configuration
- [x] `.vercelignore` - Exclude unnecessary files
- [x] `package.json` - Project metadata
- [x] ES6 modules properly configured
- [x] All paths are relative
- [x] No build step required (static site)
- [x] LocalStorage for offline mode
- [x] Responsive design
- [x] Production-ready code

---

## 📋 Deployment Configuration

### `vercel.json`
- ✅ Clean URLs enabled
- ✅ SPA routing configured
- ✅ Optimal caching headers
- ✅ Static file optimization

### File Structure
```
aws-ccp-exam-prep/
├── index.html          # Entry point
├── styles.css          # Styles
├── questions_bank.json # Question data
├── js/                 # Modular JavaScript
│   ├── app.js
│   ├── config.js
│   ├── utils.js
│   ├── questionService.js
│   ├── sessionManager.js
│   ├── storageService.js
│   ├── timerController.js
│   └── uiController.js
├── vercel.json         # Vercel config
├── package.json        # Project metadata
└── .vercelignore       # Deployment exclusions
```

---

## 🔧 Environment Variables

**None required!** This is a fully client-side application.

---

## 🌐 Custom Domain (Optional)

After deployment, add a custom domain:

1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Add your domain
4. Update DNS records as instructed

---

## 📊 Performance Optimizations

Already configured:

- ✅ **Caching**: Aggressive caching for static assets
- ✅ **Compression**: Automatic Gzip/Brotli
- ✅ **CDN**: Global edge network
- ✅ **HTTP/2**: Enabled by default
- ✅ **SSL**: Automatic HTTPS
- ✅ **Offline**: LocalStorage caching

---

## 🧪 Testing Deployment

After deployment:

1. **Visit your URL**: `https://your-project.vercel.app`
2. **Test features**:
   - [ ] Questions load
   - [ ] Timer works
   - [ ] Multi-select questions work
   - [ ] Session recovery works
   - [ ] Offline mode works (disconnect internet)
   - [ ] Responsive on mobile

3. **Check DevTools**:
   - [ ] No console errors
   - [ ] LocalStorage working
   - [ ] Service Worker (if added)

---

## 🔄 Continuous Deployment

With GitHub integration:

```bash
# Make changes
git add .
git commit -m "Update questions"
git push

# Vercel automatically deploys!
```

---

## 📈 Monitoring

Vercel provides:
- **Analytics**: Page views, performance
- **Logs**: Real-time deployment logs
- **Insights**: Core Web Vitals

Access at: `https://vercel.com/<username>/<project>/analytics`

---

## 🐛 Troubleshooting

### Issue: Module not found
**Solution**: Ensure all imports use relative paths with `.js` extension
```javascript
import { CONFIG } from './config.js'; // ✓ Correct
import { CONFIG } from './config';    // ✗ Wrong
```

### Issue: 404 on refresh
**Solution**: Already fixed in `vercel.json` with SPA routing

### Issue: LocalStorage not working
**Solution**: Ensure HTTPS (automatic on Vercel)

### Issue: Questions not loading
**Solution**: Check `questions_bank.json` is in root directory

---

## 📝 Deployment Commands

```bash
# Development preview
vercel

# Production deployment
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs <deployment-url>

# Remove deployment
vercel rm <deployment-name>
```

---

## 🎯 Post-Deployment

1. **Share your app**: `https://your-project.vercel.app`
2. **Monitor performance**: Check Vercel Analytics
3. **Update questions**: Just push to GitHub
4. **Add features**: Deploy automatically

---

## 🚀 You're Ready to Deploy!

Everything is configured. Just run:

```bash
vercel
```

And your app will be live in seconds! 🎉
