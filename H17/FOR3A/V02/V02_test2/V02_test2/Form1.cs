using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace V02_test2
{
    public partial class Form1 : Form
    {
        Graphics surface1;
        Pen pen1;
        Point mousePos;
        Point oldMousePos;
        int diffX, diffY;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            surface1 = this.CreateGraphics();
            pen1 = new Pen(Color.Red);
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            mousePos = this.PointToClient(Cursor.Position);
            if (oldMousePos == null)
            {
                // in case old mouse pos not yet defined 
                oldMousePos = mousePos;
            }
            // Calculate the diff of old and existing mouse pos
            diffX = mousePos.X - oldMousePos.X;
            diffY = mousePos.Y - oldMousePos.Y;

            // Use the diff in the ending posistion of the line
            surface1.DrawLine(pen1, mousePos.X, mousePos.Y, mousePos.X - 10 * diffX , mousePos.Y - 10 * diffY);

            // Set the old mouse pos to the existing mouse pos
            oldMousePos = mousePos;

        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            Invalidate();
        }
    }
}
